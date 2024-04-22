const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')

const a = Number(input[0])
const b = input[1].split(' ')

const M = Math.max(...b)
let arr = 0

for (let i = 0 ; i < a ; i ++) {
     arr += b[i]/ M * 100 
     
}

console.log(arr / a);