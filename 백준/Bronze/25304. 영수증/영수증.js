const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n')

let price = Number(input[0])
let n = Number(input[1])

let total = 0

for (let i = 2 ; i < n + 2 ; i++) {
    let X = input[i].split(' ')
    const [ A , B ] = X
    
    total += A * B
}
    console.log(price === total ? "Yes" : "No");