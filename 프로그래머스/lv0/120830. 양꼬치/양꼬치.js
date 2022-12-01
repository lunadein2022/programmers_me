function solution(n, k) {
    //1. 양꼬치 n인분 => 12000*n
    //2. 음료수 k개 => 2000*k
    var answer = 0;
    answer = 12000* n + 2000*(k-(Math.floor(n/10)))
    return answer;
}