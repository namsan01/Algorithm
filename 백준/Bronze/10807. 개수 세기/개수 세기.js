const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n')

const A = Number(input[0])
const arr = input[1].split(' ').map(Number)
const B = Number(input[2])

let cnt = 0

for ( let i = 0 ; i < A ; i++ ) {
    if (arr[i] === B) {
        cnt++
    }
}
console.log(cnt);
