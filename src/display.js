import React from "react";


function Display(props){

    return(
    <div className="display-container">
        <p>{props.dispNumbers}</p>
       <p> {props.numArr}</p>
    </div>)

}
export default Display;