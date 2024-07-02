document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.id;

            if (buttonId >= '0' && buttonId <= '9' || buttonId === 'decimal') {
                currentInput += buttonId === 'decimal' ? '.' : buttonId;
                display.textContent = currentInput;
            } else if (buttonId === 'add' || buttonId === 'subtract' || buttonId === 'multiply' || buttonId === 'divide') {
                firstOperand = parseFloat(currentInput);
                operator = buttonId;
                currentInput = '';
            } else if (buttonId === 'equals') {
                const secondOperand = parseFloat(currentInput);
                if (operator && !isNaN(firstOperand) && !isNaN(secondOperand)) {
                    let result;
                    switch (operator) {
                        case 'add':
                            result = firstOperand + secondOperand;
                            break;
                        case 'subtract':
                            result = firstOperand - secondOperand;
                            break;
                        case 'multiply':
                            result = firstOperand * secondOperand;
                            break;
                        case 'divide':
                            result = firstOperand / secondOperand;
                            break;
                    }
                    display.textContent = result;
                    currentInput = result.toString();
                    operator = null;
                    firstOperand = null;
                }
            } else if (buttonId === 'clear') {
                currentInput = '';
                operator = null;
                firstOperand = null;
                display.textContent = '';
            }
        });
    });
});
