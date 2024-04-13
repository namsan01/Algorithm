const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n');

const A = Number(input[0])


    if (A % 400 === 0) {
        console.log(1); 
    } else if ( A % 100 === 0) {
        console.log(0);
    } else if( A % 4 === 0) {
        console.log(1); 
    } else {
        console.log(0); 
    }
