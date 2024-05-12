let history = []; 

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function append(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result;
    try {
        result = eval(expression);
        document.getElementById('display').value = result;
        history.push(expression + ' = ' + result); 
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        append(key);
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Delete') {
        clearDisplay();
    } else if (key === 'Enter') {
        calculate();
    }
});


function showHistory() {
    let historyMessage = 'Calculation History:\n';
    history.forEach(calculation => {
        historyMessage += calculation + '\n';
    });
    alert(historyMessage);
}
