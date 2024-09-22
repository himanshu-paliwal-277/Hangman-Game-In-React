import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer"

function StartGame() {
    
    const navigate = useNavigate();
    
    function onSubmitHandler(value, hint) {
        navigate("/play", {state: {wordSelected: value, hintGiven: hint}});
        console.log("value : ",value)
        console.log("hint : ",hint)
    }

    return (
        <div className="flex flex-col items-center w-full h-screen">
            <h1 className="my-16 text-3xl font-semibold text-white textShadow">Start Game !</h1>
            <TextInputFormContainer onSubmit={onSubmitHandler} />

            <button className="absolute text-white top-5 left-6 " onClick={() => {navigate("/")}}>
                <img src="https://static.thenounproject.com/png/610387-200.png" className="active:scale-100 w-7 h-7 hover:scale-105" alt="back button" />
            </button>

            {/* <button className="absolute px-4 py-2 text-white bg-green-500 rounded top-5 right-6" onClick={() => {navigate("/play")}}>
                quick start
            </button> */}
            {/* <Link to="/play" className="text-blue-600 underline hover:text-blue-700">Go to Play Game</Link> */}
        </div>
    )
}

export default StartGame;