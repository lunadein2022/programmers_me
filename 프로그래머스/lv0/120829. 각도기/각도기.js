function solution(angle) {
    //1. 0< anger <90 = 예각
    //2. 90 = angelr = 직각
    //3. 90< angle <180 = 둔각
    //4. 180 = angle = 평각
    
    var answer = 0;
    
    if(angle === 180){
        answer = 4
        return answer
    }else if (angle > 90 && angle < 180){
        answer = 3
        return answer
    }else if (angle === 90){
        answer = 2
        return answer
    }else if (angle > 0 && angle < 90){
        answer = 1
        return answer
    }
    
    return answer;
}