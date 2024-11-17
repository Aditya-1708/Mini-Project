import React, { useEffect, useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useLocation } from "react-router-dom";
import { FloatingDock } from "../components/floatingNavbar";
import { links } from "../navbarItems";

type Question = {
  id: number;
  text: string;
  options: { text: string; correct: boolean }[] | []; // Options for MCQs or empty for integer type
  answer: string;
  explanation: string;
};

const QuestionInterface: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>(""); // For typed answers
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>(""); // Correct/Incorrect Feedback
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const location = useLocation();

  // Fetch questions on component load
  useEffect(() => {
    const getDataset = async () => {
      const subject = location.state.Subject;
      let topic = location.state.topic.replace(/\s/g, "");

      try {
        const response = await axios.post(
          `${BACKEND_URL}/dataset`,
          { subject, topic },
          { withCredentials: true }
        );

        const transformedQuestions = response.data.map((item: any, index: number) => ({
          id: index + 1, // Unique ID for each question
          text: item.question.replace(/\\t/g, " ").trim(), // Cleaned question text
          options: item.options || [], // Use the options array as-is from the API
          answer: item.options.find((option: any) => option.correct)?.text || item.answer || "", // Get the correct option's text, fallback to answer field if necessary
          explanation: item.explanation || "", // Explanation with a default fallback
        }));
        

        setQuestions(transformedQuestions);
      } catch (e) {
        console.error("Error fetching dataset", e);
        setQuestions([]);
      }
    };
    getDataset();
  }, [location.state.Subject, location.state.topic]);

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  // Handle option selection for MCQs
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setFeedback(option === currentQuestion?.answer ? "Correct!" : "Incorrect");
    setShowExplanation(true);
  };

  // Handle answer submission for integer-type questions
  const handleTypedAnswerSubmit = () => {
    setFeedback(
      typedAnswer.trim().toLowerCase() === currentQuestion?.answer.trim().toLowerCase()
        ? "Correct!"
        : "Incorrect"
    );
    setShowExplanation(true);
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentQuestionId < questions.length) {
      setCurrentQuestionId(currentQuestionId + 1);
      setSelectedOption(null);
      setTypedAnswer("");
      setFeedback("");
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionId > 1) {
      setCurrentQuestionId(currentQuestionId - 1);
      setSelectedOption(null);
      setTypedAnswer("");
      setFeedback("");
      setShowExplanation(false);
    }
  };

  return (
    <div className="flex h-screen bg-black text-gray-200">
      {/* Sidebar */}
      <div
        className={`${
          showSidebar ? "w-1/4" : "w-16"
        } bg-[#1B1B1B] p-2 shadow-lg transition-all duration-300`}
      >
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-blue-600 text-white flex justify-center p-2 rounded mb-4 w-full"
        >
          {showSidebar ? <IconX className="text-xl" /> : <IconMenu className="text-xl" />}
        </button>
        {showSidebar && (
          <div>
            <h2 className="text-lg font-bold mb-4 text-center">{location.state.topic} Questions</h2>
            <hr />
            <div className="grid grid-cols-4 gap-2 mt-4">
              {questions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => {
                    setCurrentQuestionId(question.id);
                    setSelectedOption(null);
                    setTypedAnswer("");
                    setFeedback("");
                    setShowExplanation(false);
                  }}
                  className={`p-2 text-sm border rounded ${
                    currentQuestionId === question.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700"
                  }`}
                >
                  {question.id}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {currentQuestion && (
          <div className="bg-[#1B1B1B] p-6 rounded shadow-md w-full max-w-3xl">
            <h3 className="text-xl font-semibold mb-4 text-center">{currentQuestion.text}</h3>
            <hr />
            <br />
            {currentQuestion.options.length > 0 ? (
              <div className="space-y-2 mb-6">
                {currentQuestion.options.map((option, index) => (
                  <label key={index} className="block">
                    <input
                      type="radio"
                      name="option"
                      value={option.text}
                      checked={selectedOption === option.text}
                      onChange={() => handleOptionChange(option.text)}
                      className="mr-2"
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            ) : (
              <div className="mb-6">
                <label className="block mb-2 text-lg">Type your answer:</label>
                <input
                  type="text"
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  className="p-2 border rounded w-full text-black"
                />
                <button
                  onClick={handleTypedAnswerSubmit}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
            )}
            <hr />

            {/* Feedback */}
            {feedback && (
              <div
                className={`p-4 rounded shadow-md mt-4 ${
                  feedback === "Correct!" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <h4 className="font-semibold">{feedback}</h4>
              </div>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="bg-[#1B1B1B] p-4 rounded shadow-md mt-4">
                <h4 className="font-semibold text-green-400">Explanation:</h4>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Navigation */}
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
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              <FloatingDock items={links} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionInterface;
