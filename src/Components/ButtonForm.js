import React from "react";

function ButtonForm(){

    let a = document.getElementsByClassName("form-check-input");
    let arr = Array.from(a)
    arr.forEach(item => {
        console.log(item.checked);
    });
}

export default ButtonForm;

//classes dos inputs
// form-control
// form-check-input