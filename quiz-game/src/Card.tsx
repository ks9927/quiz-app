import { useState, useEffect } from "react";
import he from "he";

export default function Card() {
  const [quizContent, setQuizContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=3&category=29&difficulty=easy&type=multiple",
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        const quizInfo = data.results;

        const quizArray = quizInfo.map((quiz: any) => ({
          question: quiz.question,
          correct_answer: quiz.correct_answer,
          incorrect_answers: quiz.incorrect_answers,
        }));
        setQuizContent(quizArray);
      } catch (error) {
        console.error("Fetch failed: ", error);
      }
    };
    fetchQuiz();
  }, []);

  if (quizContent.length === 0) {
    return <div>Loading...</div>;
  }

  const formatQuiz = quizContent.map((quiz: any) => {
    const allAnswers = [...quiz.incorrect_answers, quiz.correct_answer];

    return {
      answers: allAnswers.map((ans: any) => he.decode(ans)),
      question: he.decode(quiz.question),
      correct_answer: he.decode(quiz.correct_answer),
    };
  });

  const currentProblem = formatQuiz[currentIndex];

  const nextProblem = () => {
    setCurrentIndex((prev) => (prev + 1) % formatQuiz.length);
  };
  return (
    <>
      {/* Actual card */}
      <div
        className="border-4 border-pink-400 rounded-2xl p-52
         bg-pink-400 flex flex-col justify-between content-between
         gap-7 max-h-56"
      >
        {/* Questions */}
        <div className="bg-pink-300 p-5 rounded-2xl font-semibold">
          <p>{currentProblem.question}</p>
        </div>

        {/* Answers div */}
        <div className="border-4 p-11">
          
        </div>

        <div>
          <button
            onClick={nextProblem}
            className="border-4 bg-green-300 text-black p-4 rounded-xl cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
