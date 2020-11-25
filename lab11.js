var sentence = "I'll go to bed again today tomorrow:, never say nevermore"

var reg = new RegExp('\\W+')

sentence = sentence.split(reg)

function max() {
    var max = "";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].length > max.length){
            max = sentence[i];
        }
    }
    return max;
}

function min() {
    var min = "..................................................";
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].length < min.length){
            min = sentence[i];
        }
    }
    return min;
}

function avg() {
    var sum = 0;
    for (word in sentence) {
        sum += sentence[word].length
    }
    return sum/sentence.length
}

alert("Самое длинное слово - " + max() +
    "\nСамое короткое слово - " + min() +
    "\nСредняя длинна слов - " + avg());