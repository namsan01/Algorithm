const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split(' ');

const A = Number(input[0])
const B = Number(input[1])

if ( A > B ) {
    console.log(">");
} else if ( A < B) {
    console.log("<");
} else  {
console.log("==");
}
