const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n').map(Number)

let a = []

for (let i = 0 ; i < input.length ; i++) {
  
  const b = input[i] % 42
  if(!a.includes(b)){
    a.push(b)
  }
    
}
console.log(a.length);