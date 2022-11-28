function solution(array) {
    //(배열의 중앙값 구하기)
    //오름차순으로 정렬
    //배열길이에서 2를 나누고 올림을 하면 중앙값의 인덱스가 나옴
    //해당 인덱스의 값을 리턴
    
    let a = Math.floor(array.length / 2);
    let b = array.sort((a, b) => a-b);
    return b[a];
    
}