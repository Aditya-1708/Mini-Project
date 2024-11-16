import React, { useEffect, useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import { FloatingDock } from "../components/floatingNavbar";
import { links } from "../navbarItems";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

type Question = {
  id: number;
  text: string;
  options: string[];
  answer: string;
  explanation: string;
};

const questions: Question[] = [
  { id: 1, text: "Sample Question 1", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: "Option 1", explanation: "Explanation for question 1" },
  { id: 2, text: "Sample Question 2", options: ["Option A", "Option B", "Option C", "Option D"], answer: "Option B", explanation: "Explanation for question 2" },
];

const QuestionInterface: React.FC = () => {

  const location = useLocation();
  console.log(location.state.topic+"\t"+location.state.Subject)

  useEffect(()=>{
    const getDataset = (async()=>{
      const subject = location.state.Subject
      let topic = location.state.topic;
      topic = topic.replace(/\s/g,""); 
      try{
        const response = await axios.post(`${BACKEND_URL}/dataset`,{
          data:{
            subject:'chemistry',
            topic:"Thermodynamics",
          },
        },{
          withCredentials:true
        })
        console.log(response.data)
      }
      catch(e)
      {
        return <h2 className="flex w-1/3 justify-center items-center text-center">Something went wrong try refreshing the page!</h2>
      }
    })
    getDataset();
  },[])

  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionId < questions.length) {
      setCurrentQuestionId(currentQuestionId + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionId > 1) {
      setCurrentQuestionId(currentQuestionId - 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      {/* Sidebar - Question List */}
      <div className={`${showSidebar ? "w-1/4" : "w-16"} bg-[#1B1B1B] p-2 shadow-lg transition-all duration-300`}>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-blue-600 text-white flex justify-center p-2 rounded mb-4 w-full text-sm md:text-base lg:text-lg"
        >
          {showSidebar ? <IconX className="text-xl" /> : <IconMenu className="text-xl" />}
        </button>
        {showSidebar && (
          <div>
            <h2 className="text-lg font-bold mb-4 text-center">Questions</h2>
            <hr />
            <br />
            <div className="grid grid-cols-4 gap-2">
              {questions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => {
                    setCurrentQuestionId(question.id);
                    setSelectedOption(null);
                    setShowExplanation(false);
                  }}
                  className={`p-2 text-sm border rounded ${
                    currentQuestionId === question.id ? "bg-blue-500 text-white" : "bg-gray-700"
                  }`}
                >
                  {question.id}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content - Question Display */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {currentQuestion && (
          <div className="bg-[#1B1B1B] p-6 rounded shadow-md w-full max-w-3xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">{currentQuestion.text}</h3>
            <hr />
            <br />
            <div className="space-y-2 mb-6">
              {currentQuestion.options.map((option, index) => (
                <label key={index} className="block">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            <hr />

            {/* Explanation - Only shows after an option is selected */}
            {showExplanation && (
              <div className="bg-[#1B1B1B] p-4 rounded shadow-md mt-4">
                <h4 className="font-semibold text-green-400">Explanation:</h4>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-red-600 text-white rounded disabled:bg-gray-500"
                disabled={currentQuestionId === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-500"
                disabled={currentQuestionId === questions.length}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default QuestionInterface;
