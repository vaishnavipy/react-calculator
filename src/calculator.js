import React from "react";
import "./App.css";
import useCalc from "./useCalc";


function Calculator(props){

    const calcArr = useCalc();

    const rows = calcArr.map(key =>  <div class={`${key.class1} ${key.class2}`} onClick={handleClick}>{key.displayKey}</div> )

    function handleClick(event){

       props.handleClick(event.target.textContent)
    }


    return(
        <div className="calculator-container">
           {rows}
        </div>)
}
export default Calculator;