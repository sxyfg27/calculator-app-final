const display = document.getElementById('display');
let currentInput = '';

// Update display function
function updateDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

// Event listeners for number and operation buttons
document.querySelectorAll('.number, .operation').forEach(button => {
    button.addEventListener('click', function() {
        updateDisplay(this.value);
    });
});

// Event listener for equals button
document.getElementById('equals').addEventListener('click', function() {
    try {
        // Use eval to calculate and check for division by zero
        let result = eval(currentInput);
        if (result === Infinity || result === -Infinity) {
            throw new Error("Division by zero");
        }
        currentInput = result.toString();
        display.value = currentInput;
    } catch (error) {
        // Handle errors including division by zero
        display.value = 'Error';
        currentInput = '';
    }
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', function() {
    currentInput = '';
    display.value = currentInput;
});




