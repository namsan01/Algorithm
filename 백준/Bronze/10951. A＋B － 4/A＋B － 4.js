const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')

for ( let i = 0 ; i < input.length ; i++ ) {
    const A = input[i].split(' ')
    const B = parseInt(A[0])
    const C = parseInt(A[1])
    console.log(`${B + C}`);

}

