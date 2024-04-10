



let firstInput;
let secondInput;
let operation;

const operatorButtons = document.querySelectorAll(".operatorButton");

operatorButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(firstInput !== undefined && secondInput === undefined){
            operation = button.textContent;
            setOperatorScreen(operation); 
        }
    });
});



const numberButtons = document.querySelectorAll(".numberButton");

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


function setOperatorScreen(content){
    const operator = document.querySelector("#operator");
    operator.textContent = content;
}

function setFirstNumberScreen(content){
    const firstNumberText = document.querySelector("#firstNumber");
    firstNumberText.textContent = content;
}

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
   