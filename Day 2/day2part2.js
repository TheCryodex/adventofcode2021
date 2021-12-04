const fs = require('fs');

try {
    
    const data = fs.readFileSync('./input.txt', 'utf-8');
    const lines = data.split(/\r?\n/);
    
    let horizontal = 0;
    let vertical = 0;
    let aim = 0;

    for (line of lines) {

        let [command, input] = line.split(' ');
        input = parseInt(input);

        if (command == 'forward') {
            horizontal += input;
            vertical += aim*input;
        } else if (command == 'up') {
            aim -= input;
        } else if (command == 'down') {
            aim += input;
        } 
    } 
    console.log(horizontal*vertical);
    
} catch (error) {
    console.log(error);
}


