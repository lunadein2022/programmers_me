function solution(n) {
    
    //     //새 배열을 만들기
//     //n을 2로 나눴을 때 나머지가 1인 숫자들을
//     //새 배열에 push하기
    var answer = [];
    
    for(let i = 1; i <= n; i++){
        if(i % 2 === 1 ){
           answer.push(i)
        }
    }
    
    return answer;
}