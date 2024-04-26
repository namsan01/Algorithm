const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim()

const a = String(input)

const r = a.split('').reverse().join('')


if (a === r) {
    console.log("1");
}  else {
    console.log("0");
}
