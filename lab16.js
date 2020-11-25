let v = prompt('Введите нач скорость', 32);
if (isNaN(v)){
    alert('ERROR! Please press F5 and repeat');
} else {
    v = parseInt(v)
}
let t = prompt('Введите время полёта', 5);
if (isNaN(t)){
    alert('ERROR! Please press F5 and repeat');
} else {
    t = parseInt(t)
}

let sinX = (9.8*t)/(2*v);
if (sinX > 1 && sinX < -1){
    alert('Введены нереальные данные')
} else {
    alert('Угол ' + Math.asin(sinX)*57);
}