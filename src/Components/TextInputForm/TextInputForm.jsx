// Presentation component
import TextInput from "../TextInput/TextInput";
import Button from "../Button/CustomButton"

function TextInputForm({handleFormSubmit, handleTextInputChange,hintWord, handleTextInputChangeHint, value, inputType, setInputType}) {

    return (
        <form className="flex flex-col text-white " onSubmit={handleFormSubmit}>
            <div className="relative flex items-end mb-12 text-lg smTextShadow">
                <TextInput
                    label="Enter a word or phrase for a friend"
                    type={inputType}
                    onChange={handleTextInputChange}
                    value={value}
                    require="true"
                />

                <Button 
                    text={inputType === "password" ? "show" : "hide"}
                    styleType="error"
                    onClickHandler={() => setInputType(inputType === "password" ? "text" : "password")}
                    additionalStyle={"w-16 text-black text-sm absolute right-2"}
                />
            </div>
            <div className="flex items-end w-full text-lg smTextShadow">
                <TextInput
                    label="Enter a hint to guess the word"
                    type={"text"}
                    onChange={handleTextInputChangeHint}
                    value={hintWord}
                />
            </div>
            <div className="flex justify-center mt-12">
                <Button 
                    text="Play"
                    buttonType="submit"
                    additionalStyle={"bg-blue-600 shadow-xl text-white"}
                />
            </div>
        </form>
    )
}

export default TextInputForm;