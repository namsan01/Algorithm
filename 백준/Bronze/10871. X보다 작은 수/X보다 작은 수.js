const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split('\n')


const [ N , X] = input[0].split(' ').map(Number)

const arr = input[1].split(' ').map(Number)


const answer = arr.filter( v => X > v)



console.log(answer.join(' '));