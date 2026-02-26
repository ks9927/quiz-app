import { useState, useEffect } from "react";
import he from 'he';

export default function Card() {


  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=3&category=29&difficulty=easy&type=multiple");
       
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
         const quizInfo = data.results;
          const quizQuestion = quizInfo.map((item: any) => {
            return he.decode(item.question);
          })
          // console.log(quizQuestion);
          setQuestion(quizQuestion);
      } 
      catch (error) {
        console.error("Fetch failed: ", error);
      }
    };
    fetchQuiz();
  }, []);

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
          <p>{question}</p>
        </div>

        {/* Answers div */}
        <div className="border-4 p-11">
          <p>These are some questions</p>
        </div>

        <div>
          <button className="border-4 bg-green-300 text-black p-4 rounded-xl">Next</button>
        </div>
      </div>
    </>
  );
}
