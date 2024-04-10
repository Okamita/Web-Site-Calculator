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


//Operations

const operators = {
    add : "add",
    multiply : "multiply",
    divide : "divide",
}

function operate(a, b, operator){
    switch(operator){
        case "add": 
            add(a, b);
            break;
        case "multiply":
            multiply(a, b);
            break;
        case "divide":
            divide(a, b);
            break
    }
}

function add(a, b) {return a + b};

function multiply(a, b)  {return a * b};

function divide(a, b)  {return a / b};
   