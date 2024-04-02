function solution(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    var answer = total / numbers.length
    return answer;
} 