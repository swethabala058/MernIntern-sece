import {useState} from "react"

const UseState = () =>{
    const [number,updateNumber]=useState(0);
    const subTract =() =>{
        updateNumber(number-1);
    }
    const addTion =() =>{
        updateNumber(number+1);
    }
    const reSet = () =>{
        updateNumber(0);
    }
    return(
        <div>
            <h2>UseState Hook Example</h2>
            <button onClick={subTract}>-</button>
            <input type="number" value={number}/>
            <button onClick={addTion}>+</button>
            <button onDoubleClick={reSet}>Reset</button>
        </div>
    
    );
}
export default UseState;