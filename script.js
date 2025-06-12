import { add, divide, multiply, subtract } from "./operations.js";

const numbers = Array(9).keys();
const display = document.querySelector("#display");
display.innerText += "9";
let args = new Array(3).fill("");

document.querySelectorAll(".numeric").forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        display.innerText += button.id;
        if (args[1] === "") {
            
        }
    });
});

document.querySelector("#clear")
    .addEventListener("click", () => {
        display.innerText = "";
        args = new Array(3).fill("");
    });