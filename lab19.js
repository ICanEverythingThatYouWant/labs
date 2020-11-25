let input = prompt('Введите строку:', 'Это простая строка');
let output = [];

for (let i = 0; i < input.length; i++) {
    if (output.includes(input[i]) != true){
        output.push(input[i])
    }
}

alert(output.join(''));