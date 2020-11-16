





function CalcResult(resultString){

    const newArr = resultString;
    let result="";
    let shouldCalc=false;
    let method="+";
    let finalResult=0;
//console.log(resultArr)
    for(let i=0 ; i< newArr.length ; i++){

        if((Number.isInteger(Number(newArr[i]))) ){

            result += newArr[i];
            console.log(result+"if loop")
           if(i == newArr.length-1){
            shouldCalc=true;

           }

        }else {
           
           shouldCalc=true;
           method = newArr[i]

        }
        if(shouldCalc){

            if(method == "+"){
                finalResult += Number(result);
                result="";
                shouldCalc=false;
            }
            if(method == "-"){
                finalResult == 0 ? finalResult=Number(result) : finalResult -= Number(result);
                console.log(finalResult)
                result="";
                shouldCalc=false;
                
            }
            if(method == "X"){
                finalResult *= Number(result);
                result="";
                shouldCalc=false;
                
            }
            if(method == "/"){
                finalResult /= Number(result);
                result="";
                shouldCalc=false;
                
            }

        }



    }
   
    return finalResult;

}

export default CalcResult;