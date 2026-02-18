export default function Card() {

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