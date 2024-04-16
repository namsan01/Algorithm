const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n')

const A = Number(input[0])

for (let i = 1 ; i <= A ; i++) {
    let X = input[i].split(' ')
    console.log(`Case #${i}: ${Number(X[0])} + ${Number(X[1])} = ${Number(X[0]) + Number(X[1])}`);  
}

