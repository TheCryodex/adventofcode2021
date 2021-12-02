const fs = require('fs');

try {
    const data = fs.readFileSync('./input.txt', 'utf-8');
    const lines = data.split(/\r?\n/);
    let previous = Infinity;
    let ans = 0;
    lines.forEach((line)=>{
        number = Number(line);
        if (number > previous) {
            ans+=1;
        }
        previous = number;
    });
    console.log(ans);
} catch (error) {
    console.log(error);
}


