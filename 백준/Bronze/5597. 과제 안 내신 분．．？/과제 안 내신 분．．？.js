const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n').map(Number)

const M = [];

for (let i = 1 ; i <= 30 ; i++) {
  if(!input.includes(i)){
    M.push(i);
  }
}

console.log(`${M[0]}\n${M[1]}`);