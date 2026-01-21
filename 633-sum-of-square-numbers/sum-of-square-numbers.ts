function judgeSquareSum(c: number): boolean {
    let heigh = Math.ceil(Math.sqrt(c));  
    let low = 0; 

    while(heigh >= low){
        let pw = Math.pow(heigh, 2) + Math.pow(low, 2); 

        if(pw === c) return true; 
        else if(pw < c) low++; 
        else heigh--;
    }

    return false;
};