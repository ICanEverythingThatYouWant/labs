let n = prompt('Введите количество элементов:', 5);
if (isNaN(n)){
    alert('ERROR! Please press F5 and repeat');
} else {
    n = parseInt(n)
}

let output = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    let r = Math.random().toFixed(1)*10;
    output.push(r);
    sum += r
}

alert('Элементы: ' + output + '\nСумма элементов: ' + sum);