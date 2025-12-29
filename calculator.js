const main = document.querySelector(".main");

let num1;
let num2;
let operator;

const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'x', '÷', '='];
const buttonObjects = [];

buttons.forEach((value) => {
    const buttonObject = createButton(value);
    main.appendChild(buttonObject.button);
    buttonObjects.push(buttonObject);
});

function createButton(value) {
    const button = document.createElement("button");
    button.textContent = value;
    return {
        button,
        value
    };
}

function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}