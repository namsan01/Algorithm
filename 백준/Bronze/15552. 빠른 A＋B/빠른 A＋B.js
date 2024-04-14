const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n')

const A = Number(input[0])
answer = ""

for (let i = 1 ; i < A + 1 ; i++) {
    let X = input[i].split(' ')
    const [A , B] = X
    answer += Number(A) + Number(B) + "\n"
}

console.log(answer);