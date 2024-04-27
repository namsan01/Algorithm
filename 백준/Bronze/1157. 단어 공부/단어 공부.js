const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().toLowerCase()

let str = {};
let maxChar = '';
let maxCount = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] in str){
        str[input[i]] += 1;
    } else{
        str[input[i]] = 1;
    }
}

for(let x in str){
   if(maxCount < str[x]){
    maxChar = x;
    maxCount = str[x];
   } else if(maxCount == str[x]){
    maxChar = '?';
   }
}
console.log(maxChar.toUpperCase());