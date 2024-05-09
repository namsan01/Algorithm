function solution(emergency) {
    let order = new Map();
    let desc = [...emergency].sort((a,b) => b-a);
    for(let i = 0; i < desc.length; i++){
        order.set(desc[i], i+1);   
    }
    return emergency.map(v => order.get(v));
}