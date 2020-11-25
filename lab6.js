let U = prompt('Введите напряжение:', 1);
if (isNaN(U)){
    alert('ERROR! Please press F5 and repeat');
} else {
    U = parseFloat(U)
}
let I = prompt('Введите силу тока:', 1);
if (isNaN(I)){
    alert('ERROR! Please press F5 and repeat');
} else {
    I = parseFloat(I)
}
alert('Сопротивление равно: ' + U/I);