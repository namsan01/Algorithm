var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


const A = input[0].split('')
const B = input[1].split('')

console.log(Number(input[0] * Number(B[2])));
console.log(Number(input[0] * Number(B[1])));
console.log(Number(input[0] * Number(B[0])));
console.log(input[0] * input[1]);
