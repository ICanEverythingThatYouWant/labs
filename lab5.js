let x = prompt('Введите первое число:', 2);
if (isNaN(x)){
    alert('ERROR! Please press F5 and repeat');
} else {
    x = parseFloat(x)
}
let y = prompt('Введите второе число:', 3);
if (isNaN(y)){
    alert('ERROR! Please press F5 and repeat');
} else {
    y = parseFloat(y)
}
let z = prompt('Введите знак операции 1+ 2- 3* 4/:', 1);
if (isNaN(z)){
    alert('ERROR! Please press F5 and repeat');
} else {
    z = parseInt(z)
}

let out = 0;

switch (z) {
    case 1:
        out = x + y;
        break;
    case 2:
        out = x - y;
        break;
    case 3:
        out = x * y;
        break;
    case 4:
        out = x / y;
        break;
}

alert(out);