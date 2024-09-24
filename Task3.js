// script.js
let currentInput = '';
let previousInput = '';
let operation = undefined;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentInput === "0" && number === 0) return; // prevent multiple leading zeros
    currentInput = currentInput.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        default:
            return;
    }
    currentInput = result;
    operation = undefined;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}

window.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '=' || e.key === 'Enter') compute();
});
