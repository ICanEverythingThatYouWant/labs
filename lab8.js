let input = prompt('Введите  последовательность слов: ', 'автор магазин уроки школа');

let words = input.split(' ');

for (let w in words){
    words[w] = words[w].search('а') != -1 ? 'о' : words[w];
};

alert(words.join(' '));