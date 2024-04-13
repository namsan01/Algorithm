const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split(' ');

let H = Number(input[0])
let M = Number(input[1])

M -= 45;

if (M < 0) {
    M += 60;
    H --;
 if (H === -1 ) {
    H = 23;
 }
}

console.log(H , M);

