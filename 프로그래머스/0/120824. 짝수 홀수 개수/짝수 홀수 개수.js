function solution(num_list) {
    
    let odd = 0 ;
    let even = 0 ;

    for (let i = 0 ; i < num_list.length ; i++) {
        if (num_list[i] % 2 === 1) {
            odd += 1;
        } else {
            even += 1
        }
    }
    
    return [even ,odd] 
}