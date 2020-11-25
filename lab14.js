let x = prompt('Введите координату x точки', 7);
if (isNaN(x)){
    alert('ERROR! Please press F5 and repeat');
} else {
    x = parseInt(x)
}
let y = prompt('Введите координату y точки', 7);
if (isNaN(y)){
    alert('ERROR! Please press F5 and repeat');
} else {
    y = parseInt(y)
}
let x_c = prompt('Введите координату x круга', 5);
if (isNaN(x_c)){
    alert('ERROR! Please press F5 and repeat');
} else {
    x_c = parseInt(x_c)
}
let y_c = prompt('Введите координату y круга', 5);
if (isNaN(y_c)){
    alert('ERROR! Please press F5 and repeat');
} else {
    y_c = parseInt(y_c)
}
let r = prompt('Введите радиус круга', 3);
if (isNaN(r)){
    alert('ERROR! Please press F5 and repeat');
} else {
    r = parseInt(r)
}

if (((x - x_c) * (x - x_c) + (y - y_c) * (y - y_c)) <= r * r) {
    alert('Точка лежит в/на окружности')
} else {
    alert('Точка лежит за пределами окружности')
}