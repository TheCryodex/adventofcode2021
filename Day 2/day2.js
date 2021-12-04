const fs = require('fs');

try {
    
    const data = fs.readFileSync('./input.txt', 'utf-8');
    const lines = data.split(/\r?\n/);
    
    let horizontal = 0;
    let vertical = 0;

    for (line of lines) {

        let [command, input] = line.split(' ');
        input = parseInt(input);

        if (command == 'forward') {
            horizontal+=input;
        } else if (command == 'up') {
            vertical-=input;
        } else if (command == 'down') {
            vertical+=input;
        } 
    } 
    console.log(horizontal*vertical);
    
} catch (error) {
    console.log(error);
}


