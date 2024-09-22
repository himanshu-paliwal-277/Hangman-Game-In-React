// Custom Button using react and JSX

// JSX probs object can also use like (probs) and then use like probs.text 
// I destructure Probs - {buttonType, text, styleType, onClickHandler}
function Button({buttonType="button", text, onClickHandler, additionalStyle}) {
    return (
        <button
            className={`${additionalStyle} rounded duration-200 px-3 py-2 font-semibold hover:scale-105 active:scale-100`}
            type={buttonType}
            onClick={onClickHandler}
        >
            {text}
        </button>
    )
}

export default Button