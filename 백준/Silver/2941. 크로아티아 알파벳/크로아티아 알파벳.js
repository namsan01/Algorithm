const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim()

const result = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, '*').length;

console.log(result);