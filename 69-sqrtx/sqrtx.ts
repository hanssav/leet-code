function mySqrt(x: number): number {
    let low = 0; 
    let heigh = x; 

    let lastVal = 0;

    while(heigh >= low){
        const mid = Math.floor((low + heigh) / 2);
        const pw = mid * mid;

        if(pw === x) return mid;
        else if(x > pw){
            low = mid + 1;
            lastVal = mid;
        } else {
            heigh = mid - 1; 
        }
         
    }

    return lastVal;
};