const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n').map(Number)



let max = Math.max(...input)

console.log(max);
console.log(input.indexOf(max) + 1);
