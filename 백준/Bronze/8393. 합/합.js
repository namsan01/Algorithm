const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split(' ')

const A = Number(input[0])

let sum = 0

 for (let i = 1; i <= A ; i++ ) {
    sum += i

 }

 console.log(sum);