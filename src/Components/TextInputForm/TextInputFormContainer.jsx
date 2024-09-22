import { useState } from "react";
import TextInputForm from "./TextInputForm";

// Container component for TextInputForm
function TextInputFormContainer({onSubmit}) {
    const [value, setValue] = useState("");
    const [hint, setHint] = useState("");
    const [inputType, setInputType] = useState("password");

    function handleFormSubmit(event) {
        if(value !== "") {
            event.preventDefault();
            console.log("Form is submitted");
            console.log("Value = ", value);
            onSubmit ?.(value, hint); // if onSubmit is defined, call it with the value
        }
    }

    function handleTextInputChange(event) {
        console.log("Text input change");
        console.log(event.target.value);
        setValue(event.target.value);
        // whenever I Type in the input field, it will update the value
    }
    
    function handleTextInputChangeHint(event) {
        setHint(event.target.value);
        console.log("Hint = ", hint)
    }

    return (
        // calling the presentation layer
        <TextInputForm 
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
            handleTextInputChangeHint={handleTextInputChangeHint}
            hintWord={hint}
        />
    )
    
}

export default TextInputFormContainer;