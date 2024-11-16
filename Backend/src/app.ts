import express , {request, Request,Response} from 'express'
import z, { string } from 'zod'
import { PrismaClient} from '@prisma/client'
import cors from 'cors'
import jwt,{JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import AuthTokenCheck from './Middlewares/Auth'
import {jeeQuestions} from './Dataset' 

const userRoute = express();
const prisma  = new PrismaClient();
const userSchema = z.object({
    username : z.string().optional(),
    email : z.string().email(),
    password : z.string().min(8 , "Password must be of min 8 letters")
})

dotenv.config();
const jwt_secret_key = process.env.JWT_SECRET_KEY;

userRoute.use(express.json());
userRoute.use(cookieParser());
userRoute.use(cors({
    credentials:true,
    origin:"http://localhost:5173",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
}))
userRoute.use(express.urlencoded({ extended: true }));


interface Option {
  text: string;
  correct?: boolean;
}

interface Question {
  question: string;
  options: Option[];
  answer?:string
  explanation: string;
}

interface Topic {
  [year: string]: Question[]; 
}

interface types {
  [topic: string]: Topic; 
}

interface JEEQuestions {
  Chemistry: types,
  Physics : types,
  Maths : types
}



userRoute.get('/' ,AuthTokenCheck, (req,res)=>{
    res.send("Hello world");
})

userRoute.post('/api/signin', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
    // Validate input using Zod schema
    const inputValidation = userSchema.safeParse({ email, password });
    console.log(inputValidation)
    if (!inputValidation.success) {
      res.status(400).send("Invalid email or password "+ inputValidation);
    }
    else{
    try {
      // Find the user by email
      const user = await prisma.user.findUnique({
        where: {
          email: email
        }
      });
  
      if (!user) {
         res.status(404).send("User not found");
      }
      else{
      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
         res.status(400).send("Invalid Password");
      }
      else{
      // Generate JWT token
      const token = jwt.sign({
        id: user.id
      }, jwt_secret_key as string, { expiresIn: '1h' });
  
      // Set token as a cookie
      res.cookie("token", token, { maxAge: 60 * 60 * 1000,httpOnly:true ,path:'/',sameSite:'lax'});
  
      res.status(200).send("logged in");}
    } }catch (error) {
      console.log(error)
      res.status(500).send("Error signing in");
    }
  }});
  
userRoute.post('/api/signup' , async(req : Request , res :Response)=>{
    const {username,email,password} = req.body;
    const inputValidation = userSchema.safeParse({username,email,password})
    if(!inputValidation.success){
      res.status(400).send("Invalid username,email or password")
    }
    else{
    try{
        const user  = await prisma.user.findUnique({
          where:{
            email
          }
        })
        if(user){
           res.status(409).send("Already have an account")
        }
        else{
          const hashPassword = await bcrypt.hash(password,10);
          const response  = await prisma.user.create({
            data:{
              username,
              email,
              password:hashPassword
            }
          })
          
          const token = jwt.sign({id:response.id},jwt_secret_key as string , {expiresIn:'1h'})
          res.cookie("token" , token ,{
            maxAge:60*60*1000,
            httpOnly:true,
            sameSite:'lax',
            path:'/'
          })

         res.status(201).send("User created successfully");
        }
    }
  
    catch(e)
    {
      res.status(500).send("Error creating a new user")
    }
}})

userRoute.post('/api/logout' , (req:Request , res:Response)=>{
  res.clearCookie('token');
  res.status(200).send("Logged out");
})

userRoute.get('/api/verifyToken',(req:Request , res:Response)=>{
  const token = req.cookies.token;
  if(!token){
    res.status(401).send("No token provided");
  }
  else{
    try{
      const decode = jwt.verify(token,jwt_secret_key as string)
      console.log(decode);
      res.status(200).json(decode);
    }
    catch(e){
      res.status(403).send("Invalid Token")
    }
  }
})

userRoute.get('/api/getUser', async (req: Request, res: Response) => {
  const { id } = req.query; // Use req.query to get the id from query parameters

  // Check if ID is provided
  if (!id) {
     res.status(400).json({ message: 'ID is required' });
  }
  else{
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id), // Convert id to number
      },
    });

    if (!user) {
       res.status(404).json({ message: 'User not found' });
    }
    else{
    res.json(user);
  }} catch (e) {
    console.error("Error fetching user:", e);
    res.status(500).json({ message: "Error fetching user" });
  }}
});

userRoute.post('/api/dataset',AuthTokenCheck,(req:Request, res:Response)=>{
  const {subject,topic}  = req.body;
  let questions : any[] = [];
  let topicFound = false;
  if(subject === 'physics')
  {

  }
  else if(subject == 'chemistry')
  {
    const keys = Object.keys(jeeQuestions.Chemistry);
    keys.forEach((key)=>{
      if(key == topic)
      {
        topicFound = true
        const getKeys = Object.keys(jeeQuestions.Chemistry[topic as keyof typeof jeeQuestions.Chemistry])
        console.log(getKeys)
        getKeys.forEach((item)=>{
          const topicKey = topic as keyof typeof jeeQuestions.Chemistry
          const data = jeeQuestions.Chemistry[topicKey]
          const value = data[item as keyof typeof data]
          questions = questions.concat(value);
        })
      }
    })
  }
  else if(subject === 'maths')
    {
      
    }
    else
    res.json({"msg":"Subject sent is not proper"});
  if(!topicFound)
  {
    res.json({"msg":"Topic sent is incorrect"})
  }
  else{
    res.json({dataset:questions})
  }
})

// userRoute.use(AuthTokenCheck);
userRoute.listen(3000 , ()=>{
    console.log("app listening to port ",3000);
})