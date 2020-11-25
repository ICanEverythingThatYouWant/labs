let date = new Date();

let time = date.getHours() * 100 + date.getMinutes();
alert(time);

let output;

if (700 <= time && time <= 800){
    output = 'завтрака'
} else if (1300 <= time && time <= 1400){
    output = 'обеда'
} else if (1900 <= time && time <= 2000){
    output = 'ужина'
} else if (900 <= time && time <= 1800){
    output = 'работы'
} else if (1800 <= time && time <= 2300){
    output = 'отдыха'
} else if (2300 <= time && time <= 2400 && 0 <= time && time <= 630){
    output = 'сна'
} else {
    alert('????');
}

alert('Сейчас ' + time/100 + ' (время ' + output + ')');