let output = [];

for (let i = 0.1; i <= 0.8; i += 0.05) {
    let o = 4 * Math.sin(i) - 0.5 * Math.sin(i);
    output.push(o.toFixed(3))
}

alert(output.join(', '));