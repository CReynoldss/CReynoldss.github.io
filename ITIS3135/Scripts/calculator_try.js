let currentInput = '';
let operator = '';
let result = null;

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}


function onNumberClick(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function onOperatorClick(op) {
    if (currentInput === '') return;
    operator = op;
    result = parseFloat(currentInput);
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || operator === '') return;
    const currentNumber = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result += currentNumber;
            break;
        case '-':
            result -= currentNumber;
            break;
        case '*':
            result *= currentNumber;
            break;
        case '/':
            if (currentNumber === 0) {
                alert('Cannot divide by zero');
                return;
            }
            result /= currentNumber;
            break;
        default:
            return;
    }
    updateDisplay(result);
    operator = '';
    currentInput = '';
}

function clearCalculator() {
    currentInput = '';
    operator = '';
    result = null;
    updateDisplay(0);
}

document.addEventListener('DOMContentLoaded', () => {
    const numberButtons = document.querySelectorAll('[id^="num"]');
    numberButtons.forEach(button => {
        button.addEventListener('click', () => onNumberClick(button.textContent));
    });

    const operationButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');
    operationButtons.forEach(button => {
        button.addEventListener('click', () => onOperatorClick(button.textContent));
    });

    document.getElementById('equals').addEventListener('click', calculate);
    document.getElementById('clear').addEventListener('click', clearCalculator);
});
