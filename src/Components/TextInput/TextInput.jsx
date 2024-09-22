function TextInput({label, type="text", value, onChange, require="false"}) {
    
    return (
        <label className="block w-full">
            {/* This is called shock circuit */}
            {label && <span className="font-semibold">{label + " :"}</span>}
            <input 
                className="w-full px-4 py-[7px] mt-4 text-black bg-opacity-50 border border-gray-600 rounded-md  text-base"
                onChange={onChange}
                placeholder={label}
                type={type}
                value={value}
                required={require === "true" ? true : false}
            />
        </label>
    )
}

export default TextInput