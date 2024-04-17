const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')


const N = Number(input[0]);
const X = input[1].split(' ').map(Number)


let Min = Math.min(...X)
let Max = Math.max(...X)

console.log(Min , Max);