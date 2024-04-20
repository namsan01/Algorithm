const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')

const [ N , M] = input[0].split(' ').map(Number)

let arr = Array(N)
  .fill(1)
  .map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  let [I, J] = input[i].split(" ").map(Number);
  let tmp = arr[I - 1];
  arr[I - 1] = arr[J - 1];
  arr[J - 1] = tmp;
}

console.log(arr.join(" "));