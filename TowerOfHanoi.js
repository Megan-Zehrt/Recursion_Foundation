let s = 1
let a = 2
let d = 3
let result =[]

function tower_of_hanoi(n) {
    helper(n,s,a,d)
    return result;
}

function helper(n, s, aux, d){
    if(n < 1) return
    helper(n-1, s, d, aux)
    result.push([s, d])
    helper(n-1, aux, s, d)
}