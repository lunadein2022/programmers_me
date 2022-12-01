function solution(price) {
    //1. price >= 10 && price < 30  return price - price * 0.05
    //1. price >= 30 && price < 50  return price - price * 0.1
    //1. price >= 50 return price - price * 0.2
    
    
    if(price <100000){
        return price
    }else if(price >= 100000 && price < 300000){
        return Math.floor(price - price * 0.05)
    }else if(price >= 300000 && price < 500000){
        return Math.floor(price - price * 0.1)
    }else if(price >= 500000){
        return Math.floor(price - price * 0.2)
    }
    
    

}