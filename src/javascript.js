let firstInput;
let secondInput;
let operation;

//Add the functionality to all the operator buttons
const operatorButtons = document.querySelectorAll(".operatorButton");

/*Every button operator change the operator only when the first number is been
added and the second number is not being added*/
operatorButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(firstInput !== undefined && secondInput === undefined){
            operation = button.textContent;
            setOperatorScreen(operation); 
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
        if(operation === undefined){
            firstInput = button.textContent;
            setFirstNumberScreen(firstInput); 
        }else{
            secondInput = button.textContent;
            setSecondNumberText(secondInput); 
        }
    });
});

//Add the functionality to the AC button to empty the field calculator
const acButton = document.querySelector("#acButton");

//When we click the AC we reset the field and the variables of the numbers and operation
acButton.addEventListener("click", ()=>{
    firstInput = undefined;
    secondInput = undefined;
    operation = undefined;
    setOperatorScreen(undefined);
    setFirstNumberScreen(undefined);
    setSecondNumberText(undefined);
});

//Add the functionality for the equal sign button
const equalButton = document.querySelector("#resultButton");

//Change the screen frame with the result of the operation between firstInput and SecondInput
equalButton.addEventListener("click", ()=>{
    //The button works only if the firstinput secondinput and operation are not undefined
    if(firstInput === undefined || secondInput === undefined || operation === undefined){
        return;
    }

    //We make the result using the operate function
    const result = operate(parseInt(firstInput), parseInt(secondInput), operation);

    //We change the screen and reset the variables
    setFirstNumberScreen(result.toString());

    //Because we have 3 field in the html, we need to reset those 
    setSecondNumberText(undefined);
    setOperatorScreen(undefined);
    firstInput = undefined;
    secondInput = undefined;
    operation = undefined;
});

//Set the operatorText content to the parameter
function setOperatorScreen(content){
    const operator = document.querySelector("#operator");
    operator.textContent = content;
}

//Set the first number text content to the parameter
function setFirstNumberScreen(content){
    const firstNumberText = document.querySelector("#firstNumber");
    firstNumberText.textContent = content;
}

//Set the second number text  content to the parameter
function setSecondNumberText(content){
    const secondNumberText = document.querySelector("#secondNumber");
    secondNumberText.textContent = content;
}

function getOperatorScreen(){
    const operator = document.querySelector("#operator");
    return operator.textContent;
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

function add(a, b) {return a + b};

function subtract(a, b) {return a - b};

function multiply(a, b)  {return a * b};

function divide(a, b)  {return a / b};
   