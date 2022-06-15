import React, { useState } from "react";

function Item(props){
    const[isDone, setDone] =useState(false)

    function handleClick(){

        setDone((prevItem) =>{
            return !prevItem
        })
    }
    return <li 
    onClick={handleClick}
    style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
}
export default Item;