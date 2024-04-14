const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n')

const A = Number(input[0])



 for (let i = 1 ; i < A+1 ; i++ ) {
    const B = input[i].split(' ')
    const C = Number(B[0])
    const D = Number(B[1])
    console.log(C + D);
 }
