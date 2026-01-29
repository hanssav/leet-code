function convertToBase7(num: number): string {
    if(num === 0) return "0";

    const isNegative = num < 0; 

    let mod = Math.abs(num);
    let res = ""

    while(mod > 0){
        let d = mod % 7;
        res = d.toString() + res;
        mod = Math.floor(mod / 7);
    }

    return isNegative ? "-" + res : res;
};