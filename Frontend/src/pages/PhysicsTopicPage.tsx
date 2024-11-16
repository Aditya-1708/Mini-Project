import { FloatingDock } from '../components/floatingNavbar';
import { links } from '../navbarItems';
import { WobbleCard } from '../components/WobbleCard';
import physics from '../assets/maths.jpg'
const PhysicsTOPIC = [
  { topic: "Units And Measurements", img: "" },
  { topic: "Motion in a Straight Line", img: "" },
  { topic: "Motion in a Plane", img: "" },
  { topic: "Circular Motion", img: "" },
  { topic: "Laws of Motion", img: "" },
  { topic: "Work Power & Energy", img: "" },
  { topic: "Center of Mass and Collision", img: "" },
  { topic: "Rotational Motion", img: "" },
  { topic: "Waves", img: "" },
  { topic: "Simple Harmonic Motion", img: "" },
  { topic: "Gravitation", img: "" },
  { topic: "Magnetic Properties of Matter", img: "" },
  { topic: "Magnetic Effect of Current", img: "" },
  { topic: "Capacitor", img: "" },
  { topic: "Current Electricity", img: "" },
  { topic: "Electrostatics", img: "" },
  { topic: "Electromagnetic Induction", img: "" },
  { topic: "Electromagnetic Waves", img: "" },
  { topic: "Alternating Current", img: "" },
  { topic: "Atoms and Nuclei", img: "" },
  { topic: "Wave Optics", img: "" },
  { topic: "Geometrical Optics", img: "" },
  { topic: "Semiconductor", img: "" },
  { topic: "Dual Nature of Radiation", img: "" },
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
  "bg-amber-400"
]

function PhysicsTopicPage() {
  return (
    <div className='bg-[#1B1B1B] min-h-screen text-white p-8'>
      {/* Navbar component can go here */}
      <div className='grid grid-cols-3 gap-7'>
        {PhysicsTOPIC.map((item, index) => (
          <div className="h-auto w-full shadow-lg hover:shadow-xl transition"
          >
          <WobbleCard className={`${colors[index % colors.length]} h-52 flex flex-col`}>
            <div className='grid grid-cols-2'>
            <span className="text-lg font-mono -mt-10 -ml-4">{item.topic}</span>
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

export default PhysicsTopicPage;
