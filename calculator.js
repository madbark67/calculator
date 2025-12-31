const main = document.querySelector(".main");

const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'x', '÷', '=', 'C', '.', '←'];

const display = document.createElement("div");
main.appendChild(display);

buttons.forEach((value) => {
    const buttonObject = createButton(value);
    buttonObject.button.addEventListener("click", function (e) {
        handleClick(value);
    });
    main.appendChild(buttonObject.button);
});

let val1 = '';
let val2 = '';
let operator = '';
let lastVal = '';
function handleClick(value) {
    switch (value) {
        case "=":
            if (operator === "") return;
            if (val2 === "") val2 = val1;

            val1 = operate(operator, val1, val2);
            display.textContent = val1;

            val2 = "";
            operator = "";
            break;
        case "C":
            clear();
            break;
        case "-":
        case "+":
        case "x":
        case "÷":
            operatorCheck(value);
            break;
        default:
            if (lastVal == "=") {
                clear();
            }
            numberCheck(value);
    }
    lastVal = value;
}

function createButton(value) {
    const button = document.createElement("button");
    button.textContent = value;
    return {
        button,
        value
    };
}

function numberCheck(value) {


    if (operator === "") {
        // val1
        if (val1 === "" && value === ".") {
            val1 = "0";
        }
        if (val1.includes('.') && value === ".") {
            return;
        }


        if (val1 !== "" && value === "←") {
            val1 = val1.slice(0, -1);
            display.textContent = val1;
            return;
        }
        if (val1 === "" && value === "←") { return; }

        val1 += value;
        display.textContent = val1;
    } else {
        // val2
        if (val2 === "" && value === ".") {
            val2 = "0";
        }
        if (val2.includes('.') && value === ".") {
            return;
        }

        if (val2 !== "" && value === "←") {
            val2 = val2.slice(0, -1);
            display.textContent = val2;
            return;
        }
        if (val2 === "" && value === "←") { return; }
        val2 += value;
        display.textContent = val2;
    }


}

function operatorCheck(value) {
    if (value == 'x') {
        value = "*";
    } else if (value == '÷') {
        value = "/";
    }


    if (val1 === "") {
        return;
    }

    if (val2 !== "") {
        val1 = operate(operator, val1, val2);
        val2 = "";
        display.textContent = val1;
    }

    operator = value;

}

function clear() {
    display.textContent = "";
    val1 = "";
    val2 = "";
    operator = "";
    lastVal = "";
}

function operate(operator, num1, num2) {
    if (num1.endsWith('.')) num1 += "0";
    if (num2.endsWith('.')) num2 += "0";

    num1 = Number(num1);
    num2 = Number(num2);
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
    return Number.isInteger(result) ? result : result.toFixed(9);
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
    if (num2 == 0) {
        clear();
        display.textContent = "NaN";
        return "";
    }
    return num1 / num2;
}