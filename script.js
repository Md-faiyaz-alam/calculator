let memory = 0;

function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        if (!isFinite(result)) {
            throw new Error("Math Error");
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function calculatePercentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}
function calculateSquareRoot() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Error';
    }
}
function memorySave() {
    let display = document.getElementById('display');
    memory = parseFloat(display.value) || 0;
}
function memoryRecall() {
    let display = document.getElementById('display');
    display.value += memory;
}