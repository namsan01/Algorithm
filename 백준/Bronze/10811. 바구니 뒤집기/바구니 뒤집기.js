const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')

let [N, M] = input[0].split(" ").map(Number);
let basket = Array(N)
  .fill(1)
  .map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let arr = [];

  for (let j = a - 1; j < b; j++) {
    arr.push(basket[j]);
  }

  arr.reverse();
  basket.splice(a - 1, b - a + 1, ...arr);
}

console.log(basket.join(" "));