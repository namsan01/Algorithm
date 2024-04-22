const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')

const sen = input[0].split('').map(String)
const n = Number(input[1] - 1)

console.log(sen[n]);