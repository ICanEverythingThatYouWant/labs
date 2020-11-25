let output = '';

for (let i = 2; i <=  10; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j){
            continue
        }
        count += 1
    }
    if (count == 1) {
        output += i + ' '
    }
}

alert(output);