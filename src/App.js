
import './App.css';
import Display from "./display";
import Calculator from "./calculator";
import React,{useState,useEffect} from "react";
import CalcResult from "./CalcResult";
import { prettyDOM } from '@testing-library/react';

function App() {

  const [numArr,setNumArr] = useState("");

  const [dispNumbers,setDispNumbers] = useState("");
    
  const [calcSelection,setCalcSelection] = useState(false);

  const [result,setResult] = useState("");
   

  function handleClick(key){
    if(Number.isInteger(Number(key))){

     if(calcSelection){  
      
      setNumArr(key)
      setCalcSelection(false)
      }else{

        setNumArr(prevState => prevState+key)
      }
     

      setDispNumbers(prevState => prevState+key)
      

    }else if(["+","-","/","X"].includes(key)){
      
      setCalcSelection(true)
      setNumArr(key);
      setDispNumbers(prevState => prevState+key)

    }else if(key == "="){

      setResult(CalcResult(dispNumbers))
      
      setDispNumbers(prevState => prevState+"="+CalcResult(prevState))

    }else if(key == "AC"){

      setDispNumbers("")
      setNumArr(0)

    }

 
  }
  

  return (
    <div className="main-container">
        <Display dispNumbers={dispNumbers} numArr={numArr}/>
        <Calculator  handleClick={handleClick}/>
    </div>
  );
}

export default App;
