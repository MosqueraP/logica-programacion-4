
function isNumber(value) {
    return !isNaN(value) && Number.isInteger(parseFloat(value));
}

function generateFibonacci() {
    let input = document.getElementById('userInput').value;
    
    if (!isNumber(input)) {
        alert("Por favor ingrese un número valido.");
        return;
    }
    
    let number = parseInt(input);
    let fibonacciSeries = [];

    if (number === 0) {
        fibonacciSeries = [];
    } else if (number === 1) {
        fibonacciSeries = [0];
    } else {
        fibonacciSeries = [0, 1];
        for (let i = 2; i < number; i++) {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }
    }

    document.getElementById('result').innerText = fibonacciSeries.join(', ');
    console.log(fibonacciSeries.join(', '));
}