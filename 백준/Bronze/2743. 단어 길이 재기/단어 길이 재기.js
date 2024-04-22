const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')

const a = input[0].split('').map(String)

console.log(a.length);