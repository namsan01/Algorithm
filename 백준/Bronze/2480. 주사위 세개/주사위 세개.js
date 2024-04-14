const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";

const input = fs.readFileSync(file).toString().split(' ').map((value )=> +value)


const [ A , B , C ] = input.sort((a , b) => a - b)



if ( A == B && B == C)  {
    console.log(10000 + A*1000 ); 
} else if (A == B || B == C ){
    console.log(1000 + B*100);
} else {
    console.log( C*100);
}

