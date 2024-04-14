const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file)

const A = Number(input)

for ( let i = 1 ; i < 10 ; i++ ){
    console.log(`${A} * ${i} = ${A * i}`);
}
