import React, { useState } from "react";
import Kitty from "../kitty-removebg-preview.png";
import Item from "./item";
import InputArea from "./inputArea";


function App(){
    
    const [isEnter,setEnter] = useState([])

    
    function handleClick(inputItem){
        setEnter(prevEnter =>{
            return[...prevEnter, inputItem]
        })
        
    }

        
    return(
        <div className="main">
            {/* <button className="new">New List</button> */}
        <h1> <img src={Kitty} alt="f"/>To-do List</h1>
        <div className="content">
         <InputArea 
            onType={handleClick}/>

             <ul> {
                isEnter.map((itemEnter) =>{
                    return <Item 
                    text={itemEnter} />
                })
            }
               
            </ul>
        
        </div>

 
        </div>
        
     
    )
};
export default App;
