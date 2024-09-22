import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/CustomButton";
import "../../App.css";

function Home() {

    const navigate = useNavigate();
    
    function handleClick() {
        navigate("./start");
    }
    
    return (
        <>
            <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-sky-400 to-indigo-400">
                <div className="flex flex-col items-center">
                    <h1 className="mb-12 text-4xl font-bold text-white textShadow">Welcome To Hangman Game</h1>
                    <Button text="play" onClickHandler={handleClick} additionalStyle={"bg-blue-500 shadow-xl text-white"} />
                </div>
            </div>
        </>
    )
}

export default Home;