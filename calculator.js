const main = document.querySelector(".main");

const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'x', '÷', '=', 'C'];

const display = document.createElement("div");
main.appendChild(display);

buttons.forEach((value) => {
    const buttonObject = createButton(value);
    buttonObject.button.addEventListener("click", function (e) {
        switch (value) {
            case "=":
                parseValues();
                break;
            case "C":
                clear();
                break;
            default:
                display.textContent += value;
        }
    });
    main.appendChild(buttonObject.button);
});

function parseValues() {
    let content = display.textContent.split(/([+÷\-x])/);
    let val1 = Number(content[0]);
    let val2 = Number(content[2]);
    let operator;
    switch (content[1]) {
        case "+":
            operator = "+";
            break;
        case "-":
            operator = "-";
            break;
        case "x":
            operator = "*";
            break;
        case "÷":
            operator = "/";
            break;
    }
    display.textContent = operate(operator, val1, val2);
}

function createButton(value) {
    const button = document.createElement("button");
    button.textContent = value;
    return {
        button,
        value
    };
}

function clear() {
    display.textContent = "";
    return;
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