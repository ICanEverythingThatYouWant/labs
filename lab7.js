let r1 = prompt('Введите сопротивление первого резистора:', 1);
if (isNaN(r1)){
    alert('ERROR! Please press F5 and repeat');
} else {
    r1 = parseFloat(r1)
}
let r2 = prompt('Введите сопротивление второго резистора:', 1);
if (isNaN(r2)){
    alert('ERROR! Please press F5 and repeat');
} else {
    r2 = parseFloat(r2)
}

alert('Последовательное включение:' + (r1 + r2) + '\nПараллельное включение:' + (1/(1/r1+1/r2)));
