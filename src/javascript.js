const firstNumberText = document.querySelector("#firstNumber");
const secondNumberText = document.querySelector("#secondNumber");
const operator = document.querySelector("#operator");

let firstInput;
let secondInput;
let operation;


function resizeText(){
    const screenWidth = 102 + 26 + 73;
    const textWidth = firstNumberText.offsetWidth + secondNumberText.offsetWidth + operator.offsetWidth;
    const textScreen = document.querySelectorAll(".textScreen");

    if(textWidth > screenWidth){
        textScreen.forEach((element) => {
            element.style.fontSize =  "30px";
        });
    }
}

function resetTextSize(){
    const textScreen = document.querySelectorAll(".textScreen");
    textScreen.forEach((element) => {
        element.style.fontSize =  "38px";
    });
}

//How much long can be a number? This includes 0 and .
const maxLenghtNumber = 5;

//Add the functionality to the float button to input float number
const floatButton = document.querySelector("#floatButton");

//A variable to check if the float button is been pressed or not, to handle multiple pressure of the button
let isFloat = false;

//When clicked let the user input 
floatButton.addEventListener("click", ()=>{
    if(firstInput === undefined || isFloat === true || isResult === true){
        return;
    }

    if(operation === undefined && !firstNumberText.textContent.includes(".")){
        setFirstNumberScreen(floatButton.textContent); 
        firstInput = getFirstNumberScreen();
    }else if(!secondNumberText.textContent.includes(".") && operation !== undefined  && secondInput !== undefined){
        setSecondNumberText(floatButton.textContent);  
        secondInput = getSecondNumberScreen(); 
    }

    isFloat = true;
});

//Add the functionality to all the operator buttons
const operatorButtons = document.querySelectorAll(".operatorButton");

//A variable to check if the value on the screen is the result from equal button, this permit to use the number to other calculation
let isResult;

/*Every button operator change the operator only when the first number is been
added and the second number is not being added*/
operatorButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{

        if(firstInput !== undefined && secondInput === undefined && secondNumberText.textContent === ""){
            operation = button.textContent;
            setOperatorScreen(operation); 
            isResult = false;
        }
    });
});

//Add the functionality to all numbers buttons
const numberButtons = document.querySelectorAll(".numberButton");

/*Every numbered button change the content of the screen. The first input
is added only when the operator is not clicked, if instead the operation is 
available than it change only the second number.*/
numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(isResult === true){
            return;
        }
        
        if(operation === undefined){
            setFirstNumberScreen(button.textContent); 
            firstInput = getFirstNumberScreen();
        }else{
            setSecondNumberText(button.textContent);  
            secondInput = getSecondNumberScreen(); 
            resizeText();
        }

        if(getSecondNumberScreen().includes(".")){
            isFloat = true;
            return;
        }
        
        isFloat = false;
    });
});

//Add the functionality to the AC button to empty the field calculator
const acButton = document.querySelector("#acButton");

//When we click the AC we reset the field and the variables of the numbers and operation
acButton.addEventListener("click", ()=>{
    clear();
    isResult = false;
});

//Add the functionality for the equal sign button
const equalButton = document.querySelector("#resultButton");

//Change the screen frame with the result of the operation between firstInput and SecondInput
equalButton.addEventListener("click", ()=>{

    //The button works only if the firstinput secondinput and operation are not undefined
    if(firstInput === undefined || secondInput === undefined || operation === undefined){
        return;
    }
    
    if(parseFloat(firstInput) === 0 && parseFloat(secondInput) === 0 && operation === "÷"){
        clear();
        firstNumberText.textContent = "Error";
        isResult = true;
        return;
    }

    if(firstInput.slice(-1) === "." ){
        firstInput += "0";
    }else if(secondInput.slice(-1) === "."){
        secondInput += "0";
    }

    //We make the result using the operate function
    const result = operate(parseFloat(firstInput), parseFloat(secondInput), operation);

    if(result === "Infinity"){
        clear();
        firstNumberText.textContent = "Infinity";
        isResult = true;
        return;
    }

    //Because we have 3 field in the html, we need to reset those 
    clear();

    //We change the screen and reset the variables
    setFirstNumberScreen(result.toString());
    resizeText();
    firstInput = result.toString()
    isResult = true;
});

//Set the operatorText content to the parameter
function setOperatorScreen(content){operator.textContent = content;}

function getOperatorScreen(){return operator.textContent;}

function getFirstNumberScreen(){ return firstNumberText.textContent;}

//Set the first number text content to the parameter
function setFirstNumberScreen(content){
    if(firstNumberText.textContent.length === maxLenghtNumber) return;

    firstNumberText.textContent += content;
}

function getSecondNumberScreen(){ return secondNumberText.textContent;}

//Set the second number text  content to the parameter
function setSecondNumberText(content){
    if(secondNumberText.textContent.length === maxLenghtNumber)return;
    
    secondNumberText.textContent += content;
}


function clear(){
    resetTextSize();
    isFloat = false;
    firstNumberText.textContent = undefined;
    secondNumberText.textContent = undefined;
    operator.textContent  = undefined;
    firstInput = undefined;
    secondInput = undefined;
    operation = undefined;
}

function operate(a, b, operator){
    switch(operator){
        case "+": 
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

function add(a, b) {return (a + b).toFixed(2)};

function subtract(a, b) {return (a - b).toFixed(2)};

function multiply(a, b)  {return (a * b).toFixed(2)};

function divide(a, b)  {return  (a / b).toFixed(2)};
   
