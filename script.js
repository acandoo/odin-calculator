import { add, divide, multiply, subtract } from "./operations.js";

const display = document.querySelector("#display");

let args = new Array(3).fill("");

function clear() {
    display.innerText = "";
    args = new Array(3).fill("");
}

document.querySelector("#clear")
    .addEventListener("click", clear);

document.querySelectorAll(".numeric").forEach((button) => {
    button.addEventListener("click", () => {
        display.innerText += button.id;
        if (args[1] === "") {
            args[0] += button.id;
        } else {
            args[2] += button.id;
        }
    });
});

document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", () => {
        if (args[2] === "" && args[0] !== "") {
            const operations = {
                "plus": add,
                "subtract": subtract,
                "multiply": multiply,
                "divide": divide
            };

            display.innerText = args[0] + button.innerText;

            // TS devs when the array elements change type 😲
            args[1] = operations[button.id];
        }
    });
});
