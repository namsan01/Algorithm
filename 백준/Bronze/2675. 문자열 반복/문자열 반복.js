const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split("\n")

const n = Number(input[0])
let answer = ''

for (let i = 1; i <= n; i++) {
  const A = input[i].split(" ");
  const [B, S] = A;
  for (let j = 0; j < S.length; j++) {
    answer += S[j].repeat(B);
  }
  answer += "\n"
}



console.log(answer);