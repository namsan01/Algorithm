function solution(my_string, n) {
    const a = my_string.split('')
    
    let answer = '';
    for (let i = 0 ; i < a.length ; i++) {
        for(let j = 0 ; j < n ; j++) {
        answer += a[i]    
        }
    }
    
    return answer;
}