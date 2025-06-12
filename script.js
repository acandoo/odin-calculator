import { add, divide, multiply, subtract } from "./operations.js";

const display = document.querySelector("#display");

const calculatorState = {
    args: new Array(3).fill(""),
    displayIsSolution: false,
};

function clear() {
    display.innerText = "";
    calculatorState.args = new Array(3).fill("");
}

document.querySelector("#clear").addEventListener("click", clear);

document.querySelectorAll(".numeric").forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.id;
        if (calculatorState.args[1] !== "") {
            display.innerText += value;
            calculatorState.args[2] += value;
        } else if (calculatorState.displayIsSolution) {
            calculatorState.args[0] = value;
            display.innerText = value;
            calculatorState.displayIsSolution = false;
        } else {
            display.innerText += value;
            calculatorState.args[0] += value;
        }
    });
});

document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", () => {
        if (calculatorState.args[2] === "" && calculatorState.args[0] !== "") {
            const operations = {
                "add": add,
                "subtract": subtract,
                "multiply": multiply,
                "divide": divide,
            };

            display.innerText = calculatorState.args[0] + button.innerText;

            // TS devs when the array elements change type 😲
            calculatorState.args[1] = operations[button.id];
        }
    });
});

document.querySelector("#equals").addEventListener("click", () => {
    const roundingCoefficient = 7;
    const calculated = Math.round(
        calculatorState.args[1](
            parseFloat(calculatorState.args[0], 10),
            parseFloat(calculatorState.args[2], 10),
        ) * (10 ** roundingCoefficient),
    ) / (10 ** roundingCoefficient);
    clear();
    if (Math.abs(calculated) === Infinity) {
        calculatorState.args[0] = "";
        display.innerText = "ERROR";
    } else {
        calculatorState.args[0] = calculated;
        display.innerText = calculatorState.args[0];
    }
    calculatorState.displayIsSolution = true;
});
