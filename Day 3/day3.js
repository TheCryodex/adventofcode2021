const fs = require('fs');

try {
    
    const data = fs.readFileSync('./input.txt', 'utf-8');
    const lines = data.split(/\r?\n/);
    
    let gamma = '';
    let epsilon = '';

    let bitTracker = {};

    for (let i = 0; i<12; i++){
        bitTracker[i] = {
            0: 0,
            1: 0
        };
    }

    for (line of lines) {
        for(let bit=0; bit<12; bit++) {
            let check = line[bit];
            bitTracker[bit][check]+=1;
        }
    } 

    for(let i = 0; i<12;i++){
        if (bitTracker[i][0]>bitTracker[i][1]){
            gamma += 0;
            epsilon += 1;
        } else{
            gamma += 1;
            epsilon += 0;
        }
    }

    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2)
    console.log(gamma*epsilon);
    
} catch (error) {
    console.log(error);
}


