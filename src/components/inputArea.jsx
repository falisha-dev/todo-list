import React, { useState } from "react";

function InputArea(props){
    
    const [inputItem, setInput] = useState("")
    function handleChange(event){
        const newInput = event.target.value;
        setInput(newInput)
    }
    return (
        <div>
        <input 
            onChange={handleChange}
            value={inputItem}
            type="text"/>
            <button 
            onClick={() => {
                props.onType(inputItem);
                setInput("")
            }}
            >Add</button>
        </div>
    )

}
export default InputArea;