const alphabets = new Array(26).fill("").map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({ text="welcome", usedLetters, onLetterClick, isLostGame, isWon }) {

    const originalCharacters = new Set(text.toUpperCase().split(""));
    const selectedLetters = new Set(usedLetters.join("").toUpperCase().split(""));

    const buttonSyle = function(letter) {
        if(selectedLetters.has(letter)) {
            return `${originalCharacters.has(letter) ? "bg-green-600 border-green-500 border-2" : "bg-red-600 border-[#000] border-2"}`;
        }
        else {
            return "bg-blue-600 border-blue-700 hover:bg-blue-700 active:bg-blue-500";
        }
    }

    function hadleClick(event) {
        const character = event.target.value;
        onLetterClick ?.(character)
        console.log("Click character = ", character);
    }

    const buttons = alphabets.map((letter) => {
        return (
            <button 
                key={`button-${letter}`}
                className={`h-[50px] w-[50px] m-1 rounded-md focus:outline-none text-white text-xl ${buttonSyle(letter)}`}
                disabled={selectedLetters.has(letter) || isLostGame || isWon}
                value={letter}
                onClick={hadleClick}
                >
                {letter}
            </button>
        )
    })

    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;