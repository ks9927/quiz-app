import { useState, useEffect } from "react"

export default function Card() {

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch("https://opentdb.com/api.php?amount=3&category=29&difficulty=easy&type=multiple");
                const data = await response.json();
                const quizQuestion = data.results[0].question;
                console.log(quizQuestion);
            }
            catch (error) {
                console.error("Fetch failed: ", error)
            }
        }
        fetchQuiz()
    }, [])


    return (
        <>
        {/* Actual card */}
        <div className="border-4 border-pink-400 rounded-2xl p-52
         bg-pink-400 flex flex-col justify-between content-between
         gap-7 max-h-56">

            {/* Questions */}
            <div className="bg-pink-300 p-5 rounded-2xl font-semibold">
            <p>This is a card</p>
            </div>

            {/* Answers div */}
            <div className="border-4 p-11">
            <p>These are some questions</p>
            </div>
        </div>
        </>
    )
}