function maximumValue(strs: string[]): number {
    let max = 0; 
    for(let str of strs){
        if(Number(str) >= 0) {
            if(Number(str) > max){
                max = Number(str); 
            }
        } else {
            // console.log(Number(str) >= 0, str)
            if(str.length > max) max = str.length;
        } 
    }

    return max
};