import React from 'react';
import { FloatingDock } from '../components/floatingNavbar';
import { links } from '../navbarItems';
import { WobbleCard } from '../components/WobbleCard';
import physics from '../assets/maths.jpg'
const MathsTOPIC = [
  {
      "topic": "Sets and Relations",
      "img": ""
  },
  {
      "topic": "Logarithm",
      "img": ""
  },
  {
      "topic": "Quadratic Equation and Inequalities",
      "img": ""
  },
  {
      "topic": "Sequences and Series",
      "img": ""
  },
  {
      "topic": "Binomial Theorem",
      "img": ""
  },
  {
      "topic": "Matrices and Determinants",
      "img": ""
  },
  {
      "topic": "Permutations and Combinations",
      "img": ""
  },
  {
      "topic": "Probability",
      "img": ""
  },
  {
      "topic": "3D Geometry",
      "img": ""
  },
  {
      "topic": "Complex Numbers",
      "img": ""
  },
  {
      "topic": "Statistics",
      "img": ""
  },
  {
      "topic": "Trigonometric Ratio and Identities",
      "img": ""
  },
  {
      "topic": "Inverse Trigonometric Functions",
      "img": ""
  },
  {
      "topic": "Straight Lines and Pair of Straight Lines",
      "img": ""
  },
  {
      "topic": "Circle",
      "img": ""
  },
  {
      "topic": "Parabola",
      "img": ""
  },
  {
      "topic": "Ellipse",
      "img": ""
  },
  {
      "topic": "Hyperbola",
      "img": ""
  },
  {
      "topic": "Functions",
      "img": ""
  },
  {
      "topic": "Limits, Continuity and Differentiability",
      "img": ""
  },
  {
      "topic": "Differentiation",
      "img": ""
  },
  {
      "topic": "Application of Derivatives",
      "img": ""
  },
  {
      "topic": "Indefinite Integrals",
      "img": ""
  },
  {
      "topic": "Definite Integration",
      "img": ""
  },
  {
      "topic": "Area Under The Curves",
      "img": ""
  },
  {
      "topic": "Differential Equations",
      "img": ""
  }
]


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

function MathsTopicPage() {
  return (
    <div className='bg-[#1B1B1B] min-h-screen text-white p-8'>
      {/* Navbar component can go here */}
      <h2 className='text-white font-semibold p-2 text-4xl'>
        Topics
      </h2>
      <hr />
      <br />
      <div className='grid grid-cols-3 gap-7'>
        {MathsTOPIC.map((item, index) => (
          <div className="h-auto w-full shadow-lg hover:shadow-xl transition"
          >
          <WobbleCard className={`${colors[index % colors.length]} h-52 flex flex-col`} containerClassName={`${colors[index % colors.length]}`}>
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

export default MathsTopicPage;
