let n = prompt('Введите первую сторону:', 3);
if (isNaN(n)){
    alert('ERROR! Please press F5 and repeat');
} else {
    n = parseFloat(n)
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(n));
