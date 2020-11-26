let input = prompt('Введите  последовательность слов: ', 'автор магазин уроки школа');

while (input === null) {
    alert("Введите значение или введите 'exit' чтобы выйти!");
    input = prompt('Введите  последовательность слов: ', 'автор магазин уроки школа');
}

if (input === "exit") throw 'Принудительный выход';

let words = input.split(' ');

words.forEach((word, i) => {
    if (word.indexOf('а') !== -1) {
        word = word.replace('а', 'о');
        while (word.indexOf('а') !== -1) {
            word = word.replace('а', '');
        }
    }
    words[i] = word
});

alert(words.join(' '));