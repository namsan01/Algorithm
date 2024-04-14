const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n');


let A = Number(input[0].split(' ')[0])
let B = Number(input[0].split(' ')[1])
let R = Number(input[1]) 

let H = 0
let M = 0 

H = Math.floor(( A * 60 + B + R)/60);
M = (A * 60 + B + R) % 60;

if ( H >= 24) {
    H -= 24;
}

console.log(H , M);

