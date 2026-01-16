function largestOddNumber(num: string): string {
    let res = ""; 

    for(let i = num.length - 1; i >= 0; i--){
        // console.log(Number(num[i]) % 2 !== 0, num.slice(0, i + 1))
        if(Number(num[i]) % 2 !== 0) {
            res = num.slice(0, i + 1)
            break;
        };
    }
    // if(Number(num) % 2 !== 0) return num; 

    // for(let n of num){
    //     if(Number(n) % 2 !== 0) {
    //         if(Number(n) > Number(res)) res = n;
    //     }
    // }
    return res
};