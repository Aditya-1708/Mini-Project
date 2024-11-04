import React from 'react';
import { FloatingDock } from '../components/floatingNavbar';
import { links } from '../navbarItems';
import { WobbleCard } from '../components/WobbleCard';
import physics from '../assets/maths.jpg'
const ChemistryTOPIC = [
  { topic: "Some Basic Concepts of Chemistry", img: "" },
  { topic: "Structure of Atom", img: "" },
  { topic: "Redox Reactions", img: "" },
  { topic: "Gaseous State", img: "" },
  { topic: "Chemical Equilibrium", img: "" },
  { topic: "Ionic Equilibrium", img: "" },
  { topic: "Solutions", img: "" },
  { topic: "Thermodynamics", img: "" },
  { topic: "Electrochemistry", img: "" },
  { topic: "Chemical Kinetics and Nuclear Chemistry", img: "" },
  { topic: "Solid State", img: "" },
  { topic: "Surface Chemistry", img: "" },
  { topic: "Periodic Table & Periodicity", img: "" },
  { topic: "Chemical Bonding & Molecular Structure", img: "" },
  { topic: "Isolation of Elements", img: "" },
  { topic: "Hydrogen", img: "" },
  { topic: "s-Block Elements", img: "" },
  { topic: "p-Block Elements", img: "" },
  { topic: "d and f Block Elements", img: "" },
  { topic: "Coordination Compounds", img: "" },
  { topic: "Environmental Chemistry", img: "" },
  { topic: "Basics of Organic Chemistry", img: "" },
  { topic: "Hydrocarbons", img: "" },
  { topic: "Haloalkanes and Haloarenes", img: "" },
  { topic: "Alcohols, Phenols and Ethers", img: "" },
  { topic: "Aldehydes, Ketones and Carboxylic Acids", img: "" },
  { topic: "Compounds Containing Nitrogen", img: "" },
  { topic: "Polymers", img: "" },
  { topic: "Biomolecules", img: "" },
  { topic: "Chemistry in Everyday Life", img: "" },
  { topic: "Practical Organic Chemistry", img: "" }
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

function ChemistryTopicPage() {
  return (
    <div className='bg-[#1B1B1B] min-h-screen text-white p-8'>
      {/* Navbar component can go here */}
      <div className='grid grid-cols-3 gap-7'>
        {ChemistryTOPIC.map((item, index) => (
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

export default ChemistryTopicPage;
