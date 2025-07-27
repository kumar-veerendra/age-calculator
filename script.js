const inputEle = document.querySelector(".input");
const btnEle = document.getElementById("btn");
const resultEle = document.getElementById("result");

const today = new Date().getFullYear();
console.log(today);

btnEle.addEventListener("click", () => {
    const inputVal = new Date(inputEle.value).getFullYear();
    const age = today - inputVal;

    if(inputEle.value == ""){
        resultEle.innerHTML = "Please !! Enter your DOB.";
    }
    else{
        resultEle.innerHTML = `Your age is ${age} year old.`;
    }
    
})