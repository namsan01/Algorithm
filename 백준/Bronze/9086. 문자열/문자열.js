const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().trim().split('\n')

const a = Number(input[0])

for (let i = 1 ; i <= a ; i ++) {
     const sen = input[i].trim()
    
     console.log(`${sen[0]}${sen[sen.length - 1]}`);
     

}
