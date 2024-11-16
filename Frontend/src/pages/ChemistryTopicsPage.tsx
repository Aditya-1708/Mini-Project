import React from "react";
import { FloatingDock } from "../components/floatingNavbar";
import { links } from "../navbarItems";
import { WobbleCard } from "../components/WobbleCard";
import physics from "../assets/maths.jpg";
import { useNavigate } from "react-router-dom";
const ChemistryTOPIC = [
  { topic: "Structure Of Atom", img: "" },
  {
    topic: "P Block",
    img: "",
  },
  {
    topic: "Environmental Chemistry",
    img: "",
  },
  {
    topic:"Thermodynamics",
    img:""
  },
];

const colors = [
  "bg-yellow-500",
  "bg-blue-600",
  "bg-yellow-900",
  "bg-red-500",
  "bg-orange-600",
  "bg-blue-400",
  "bg-lime-700",
  "bg-pink-800",
  "bg-orange-600",
  "bg-amber-400",
];


function ChemistryTopicPage() {
  const navigate = useNavigate();
  
  const handleClick = (topic:string)=>{
    navigate('/questionInterface',{state:{Subject:'chemistry' , topic}})
  }
  return (
    <div className="bg-[#1B1B1B] min-h-screen text-white p-8">
      <h2 className='text-white font-semibold p-2 text-4xl'>
        Topics
      </h2>
      <hr />
      <br />
      <div className="grid grid-cols-3 gap-7">
        {ChemistryTOPIC.map((item, index) => (
          <div onClick={()=>handleClick(item.topic)} className="h-auto w-full shadow-lg hover:shadow-xl transition">
            <WobbleCard
              className={`${colors[index % colors.length]} h-52 flex flex-col`}
            >
              <div className="grid grid-cols-2">
                <span className="text-lg font-mono -mt-10 -ml-4">
                  {item.topic}
                </span>
                <img
                  src={physics}
                  alt=""
                  className="absolute right-0 bottom-0 h-full w-44 object-cover rounded-bl-lg "
                />
              </div>
            </WobbleCard>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}

export default ChemistryTopicPage;
