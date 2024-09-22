import {  useLocation, useNavigate } from "react-router-dom";
import MaskedText from "../../Components/MaskedText/MaskedText";
import LetterButtons from "../../Components/LetterButtons/LetterButtons";
import { useEffect, useState } from "react";
import HangMan from "../../Components/HangMan/HangMan";
import Button from "../../Components/Button/CustomButton";
import correctSound from "../../assets/Sounds/correct.mp3";
import wrongSound from "../../assets/Sounds/wrong.mp3";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [isLost, setIsLost] = useState(false);
    const [isWin, setIsWin] = useState(false);

    useEffect(() => {
        console.log("isLost", isLost);
        console.log("isWin", isWin);
    })

    const navigate = useNavigate();
    
    const location = useLocation();
    let wordSelected = location.state ?.wordSelected; // If the state is not defined, it will return undefined, otherwise it will return the value of wordSelected
    let hintGiven = location.state ?.hintGiven; // If the state is not defined, it will return undefined, otherwise it will return the value of wordSelected
    wordSelected === undefined ? wordSelected = "welcome" : "";

    function handleLetterClick(letter) {
        if(wordSelected.toUpperCase().includes(letter)) {
            console.log("Correct");
            console.log("isWin = ", isWin)
            // console.log("wordSelected = ", wordSelected)
            let sound = new Audio(correctSound);
            sound.play();
        }
        else {
            console.log("Incorrect");
            let sound = new Audio(wrongSound);
            sound.play();
            setStep(step + 1);
            if(step >= 6) {
                console.log("You lost the game");
                setIsLost(true);
            }
        }
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div className="h-screen">
            <h2 className="flex justify-center px-20 pt-6 text-4xl font-bold text-white textShadow">Hangman Game</h2>

            <div className="flex items-center w-full px-20 pt-16">
                <div className="w-[60%] px-8">
                    <div className="flex justify-center mb-12 text-white textShadow">
                        <MaskedText text={wordSelected} usedLetters={usedLetters} winHandler={setIsWin} />
                    </div>
                    <div className={`${hintGiven !== "" ? "flex justify-center text-gray-200 font-semibold mb-4" : "hidden"}`}>
                        {hintGiven !== "" ? "Hint - " + hintGiven : ""}
                    </div>
                    <LetterButtons text={wordSelected} usedLetters={usedLetters} isLostGame={isLost} isWon={isWin} onLetterClick={handleLetterClick} />
                    <div className="flex justify-center mt-6 text-lg text-gray-200">
                        <p>Guesses remaining - {step} out of 7</p>
                    </div>
                </div>            
                <div className="w-[40%] flex justify-center items-center">
                    <HangMan step={step} />
                </div>
            </div>
            {/* Game lost window */}
            <div className={`absolute ${isLost === true ? "flex" : "hidden"} translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] flex flex-col items-center justify-center py-12 px-20 bg-white rounded-lg shadow-xl`}> 
                <h1 className="mb-5 text-2xl font-bold">You Lost</h1>
                <Button text={"Restart"} onClickHandler={() => {setIsLost(false); setStep(0); setUsedLetters([])}} additionalStyle={"bg-blue-500 text-white"} />
                <Button text={"New Game"} onClickHandler={() => {navigate("/start")}} additionalStyle={"bg-blue-500 mt-3 text-white"} />
            </div>
            {/* Win Game window */}
            <div className={`absolute ${isWin === true ? "flex" : "hidden"} z-10 translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] flex-col items-center justify-center p-12 bg-white rounded-lg shadow-xl`}> 
                <h1 className="mb-5 text-2xl font-bold">You Won the Game</h1>
                <Button text={"New Game"} className="px-6 py-2 text-white bg-blue-500 rounded-lg" onClickHandler={() => {navigate("/start")}} additionalStyle={"bg-blue-500 text-white"} />
            </div>

            <button className="absolute text-white top-5 left-6 " onClick={() => {navigate("/start")}}>
                <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" className="active:scale-100 w-7 h-7 hover:scale-105" alt="back button" />
            </button>
            {/* <Link to="/start" className="text-blue-600 underline hover:text-blue-700">Go to Start Game</Link> */}
        </div>
    )
}

export default PlayGame;