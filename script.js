var ans;

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var expression = document.getElementById('display').value;
    document.getElementById('display').value = expression.slice(0,-1);
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
    ans = result;
}