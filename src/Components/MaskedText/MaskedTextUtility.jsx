function getAllCharacters(word, usedLetters) {
    // word = humble, usedCharacters = ['b','e] 
    // return "___b_e";
    usedLetters = usedLetters.map(char => char.toUpperCase());
    let guessedLetters = new Set(usedLetters);
    const characters = word.toUpperCase().split("").map(char => {
        if(guessedLetters.has(char)) {
            return char;
        }
        return "_";
    });
    return characters.join("");
}

export default getAllCharacters;