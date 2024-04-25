const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split(' ').map(Number)



const a = 1
const b = 1
const c = 2
const d = 2
const f = 2
const g = 8

console.log((a-input[0]) , (b-input[1]) , (c-input[2]) , (d-input[3]) , (f-input[4]) , (g-input[5]));