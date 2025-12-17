import { useState, useEffect } from "react";
const UseEffectExample = () => {
var[text,updateText] =  useState("hello");
var[number,updateNumber]=useState(0);

    useEffect(() => {console.log(text)},[text]);

    useEffect(()=>{console.log(number)},[number]);

    return (
        <div>
        <h3>This is UseEffect Hook</h3>
        <input type="text" value={text} onChange={(e) => {updateText(e.target.value)}} />
    
        <div>
            <h2>UseEffect Hook Example</h2>
            <input type="number" value={number} onChange={(e)=>{updateNumber(e.target.value)}}/>
        </div>
        </div>
    );
};

export default UseEffectExample;