let x = prompt('Введите вес первой гантели:', 1);
if (isNaN(x)){
    alert('ERROR! Please press F5 and repeat');
}
else {
    x = parseFloat(x)
}
let y = prompt('Введите вес второй гантели:', 2);
if (isNaN(y)){
    alert('ERROR! Please press F5 and repeat');
}
else {
    y = parseFloat(y)
}
let z = prompt('Введите вес третьей гантели:', 3);
if (isNaN(z)){
    alert('ERROR! Please press F5 and repeat');
}
else {
    z = parseFloat(z);
}

let sum, max, min;

sum = x + y + z;

if (x>y && x>z){
    max = 'гантеля под номером один самая тяжелая'
}
else if (y>x && y>z) {
    max = 'гантеля под номером два самая тяжелая'
}
else {
    max = 'гантеля под номером три самая тяжелая'
}

if (x<y && x<z){
    min = 'гантеля под номером один самая легкая'
}
else if (y<x && y<z) {
    min = 'гантеля под номером два самая легкая'
}
else {
    min = 'гантеля под номером три самая легкая'
}

alert('Общая масса гантелей: ' + sum + '\n' + max + '\n' + min);