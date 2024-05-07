function solution(n, k) {
    let answer = 0 ;
    let A = 12000 * n
    let B = Math.floor(n/10);
    let C = (k - B) * 2000
    
    answer = A + C
    return answer;
}