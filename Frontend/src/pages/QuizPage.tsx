import { WobbleCard } from '../components/WobbleCard';
import { FloatingDock } from '../components/floatingNavbar';
import { links } from '../navbarItems';
import chemistry from '../assets/chemistry.jpg'
import maths from '../assets/maths.jpg'
import physics from '../assets/physics.jpg'
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {
  const navigate = useNavigate();
  const handleClickPhysics = ()=>{
    navigate('/physicsTopics')
  }
  const handleClickChemistry = ()=>{
    navigate('/chemistryTopics')
  }
  const handleClickMaths= ()=>{
    navigate('/mathsTopics')
  }

  return (
    <div className="p-8 bg-[#1B1B1B] text-white min-h-screen space-y-12">
      
      {/* Subject-wise Questions Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Subject-wise Questions</h2>
          <button className="px-5 py-2 border border-red-500 rounded-full bg-red-500 text-white hover:bg-red-800 hover:border-red-800 transition">
            Full Mock Test
          </button>
        </div>
        <hr className="border-gray-700 mb-4" />
        <div className="flex gap-6">
          <div onClick={()=>handleClickPhysics()}  className="h-auto flex w-1/3 justify-start  shadow-lg hover:shadow-xl transition relative overflow-hidden">
          <WobbleCard    
          className='bg-[#f8b305]'      
          >
            <button className="text-lg font-mono z-1">Physics</button>
            <img
              src={physics}
              alt="Physics"
              className="absolute right-0 bottom-0 h-full w-min object-cover rounded-bl-lg z-0"
            />
          </WobbleCard>
          </div>
          <div onClick={()=>handleClickChemistry()} className="h-auto flex items-start w-1/3 justify-start shadow-lg hover:shadow-xl transition"
          >
          <WobbleCard className='bg-[#9ca4f9]'>
            <span className="text-center text-lg font-mono">Chemistry</span>
            <img
              src={chemistry}
              alt="Chemistry"
              className="absolute right-0 bottom-0 h-full w-min object-cover rounded-bl-lg z-0"
            />
          </WobbleCard>
          </div>
          <div onClick={()=>handleClickMaths()} className='h-auto flex items-start justify-start shadow-lg hover:shadow-xl transition w-1/3'>
          <WobbleCard
            className=" bg-[#0c69d7]"
          >
            <span className="text-center text-lg font-mono">Maths</span>
            <img
              src={maths}
              alt="maths"
              className="absolute right-0 bottom-0 h-full w-min object-cover rounded-bl-lg z-0"
            />
          </WobbleCard>
          </div>
        </div>
      </div>
      

      {/* Previous Year Questions Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Previous Year Questions</h2>
        <hr className="border-gray-700 mb-4" />
        <div className="flex gap-6">
          <WobbleCard 
            containerClassName="w-1/3 relative"
            className="h-48 flex items-center justify-start bg-[#9e7a57] shadow-lg hover:shadow-xl transition relative overflow-hidden rounded-lg"
          >
            <span className="text-lg font-mono ml-4 z-10">JEE</span>
            <div className="triangle-shape">
              <span className="text-lg font-mono text-white pl-16 pt-8">2024</span>
            </div>
          </WobbleCard>
          <WobbleCard 
            containerClassName="w-1/3 relative"
            className="h-48 flex items-center justify-start bg-[#E17055] shadow-lg hover:shadow-xl transition relative overflow-hidden rounded-lg"
          >
            <span className="text-lg font-mono ml-4 z-10">JEE</span>
            <div className="triangle-shape">
              <span className="text-lg font-mono text-white absolute pl-16 pt-8">2023</span>
            </div>
          </WobbleCard>
          <WobbleCard 
            containerClassName="w-1/3 relative"
            className="h-48 flex items-center justify-start bg-[#74B9FF] shadow-lg hover:shadow-xl transition relative overflow-hidden rounded-lg"
          >
            <span className="text-lg font-mono ml-4 z-10">JEE</span>
            <div className="triangle-shape">
              <span className="text-lg font-mono text-white absolute pl-16 pt-8">2022</span>
            </div>
          </WobbleCard>
        </div>
      </div>

       {/* Random Questions Section */}
       <div>
        <h2 className="text-2xl font-semibold mb-4">Random Questions</h2>
        <hr className="border-gray-700 mb-4" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-white transition"
            />
            <button className="px-4 py-3 rounded-lg bg-gray-700 hover:bg-red-500 text-white transition">
              🔍
            </button>
          </div>
        </div>
      </div>

        {/* Fixed Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default QuizPage;
