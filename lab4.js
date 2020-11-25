
let s = prompt('Введите строку длинной 20 символов:', '12345543211234554321');
let sum = 0;
let symbol = s[6];

if (s.length != 20) {
    alert('ERROR! Press F5 and try again')
} else {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == symbol){
            sum += 1
        };
    };
};

alert('Количество повторений 5го символа в строке:' + '\n' + sum);
