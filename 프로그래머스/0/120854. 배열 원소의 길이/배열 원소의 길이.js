function solution(strlist) {
    const a = strlist.toString().split(',') ;
    
    let answer = [];
    
    for (let i = 0 ; i < a.length ; i++) {
        answer.push(a[i].length);
    }
     return answer
}
