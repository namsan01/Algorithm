const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split(' ')

const n = Number(input)


for (let i = 1; i < n; i++) {
    let blank = ' '.repeat(n - i);
    let stars = '*'.repeat(i + (i - 1));
    console.log(blank + stars);
  }

  for (let j = n; j > 0; j--) {
    let blank = ' '.repeat(n - j);
    let stars = '*'.repeat(j + (j - 1));
    console.log(blank + stars);
  }
