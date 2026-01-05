function balancedStringSplit(s: string): number {
    let count_r = 0; 
    let count_l = 0; 

    let res = 0;
    for(let str of s){
        if(str === "R") count_r++
        else count_l++
        
        if(count_r === count_l) {
            count_r = 0; 
            count_l = 0;
            res++
        }
    }

    return res;
};