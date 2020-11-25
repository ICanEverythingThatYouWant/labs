let firstName = prompt('Введите фамилию: ', 'Glazko')

let consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];
let vowel = ['A', 'E', 'I', 'O', 'U', 'Y'];


let firstNameUpper = '';
for (let i = 0; i < firstName.length; i++) {
    firstNameUpper += firstName[i].toUpperCase()
}

let consonants = 0;
let vowels = 0;

for (let i = 0; i < firstNameUpper.length; i++) {
    for (let s_i = 0; s_i < consonant.length; s_i++) {
        if (firstNameUpper[i] == consonant[s_i]){
            consonants += 1
        }
    }
    for (let g_i = 0; g_i < vowel.length; g_i++) {
        if (firstNameUpper[i] == vowel[g_i]){
            vowels += 1
        }
    }
}

alert('Кол-во согласных: ' + consonants +'\n' + 'Кол-во гласных: ' + vowels);
