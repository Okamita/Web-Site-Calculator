let firstInput;
let secondInput;

const operator = {
    add : "add",
    multiply : "multiply",
    divide : "divide",
}




function add(a, b) {return a + b};

function multiply(a, b)  {return a * b};

function divide(a, b)  {return a / b};
   
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