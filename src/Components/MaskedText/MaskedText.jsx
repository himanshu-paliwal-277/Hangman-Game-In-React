import { useEffect } from "react";
import getAllCharacters from "./MaskedTextUtility";

/**
 * 
 * @param {text} The word to be guessed 
 * @returns {usedLetters} The array of letters that have been guessed so far
 */

function MaskedText({text="welcome", usedLetters,winHandler}) {
    const characters = getAllCharacters(text, usedLetters).split("");
    const isWin = (text.toUpperCase() === characters.join(""));
    // console.log("isWin = ", isWin, "text = ", text.toUpperCase(), "now text = ", characters.join(""))
    useEffect(() => {
        if (isWin) {
            winHandler(isWin);
        }
      }, [isWin, winHandler]);
    return (
        <>
            {characters.map((letter, index) => {
                return (
                    <span key={`letter ${index}`} className="mx-1 text-4xl font-bold">{letter}</span>
                )
            })}
        </>
    )
}

export default MaskedText;
