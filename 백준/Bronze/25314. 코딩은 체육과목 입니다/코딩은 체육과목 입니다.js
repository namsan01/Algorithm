const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString()

const count = Number(input) / 4;

let printLong = '';


for (let i = 1; i <= count; i++) {

printLong += 'long ';

}


console.log(printLong + 'int');