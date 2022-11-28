function solution(numbers) {
    var answer = 0;
    let all = 0
    currvalue = 0;
    answer = numbers.reduce(function add(sum, currvalue){
        return sum + currvalue;
    }, 0)
    all = answer /numbers.length
    return all;
    

}