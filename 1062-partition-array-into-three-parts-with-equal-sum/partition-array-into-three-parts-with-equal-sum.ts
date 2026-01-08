function canThreePartsEqualSum(arr: number[]): boolean {
    // Hitung total dengan loop biasa (seringkali lebih cepat dari reduce)
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    if(total % 3 !== 0) return false;
    
    const target = total / 3; 
    let count = 0;
    let res = 0; 

    // console.log(total, target)

    for(let i = 0; i < arr.length; i++){
        count += arr[i]

        if(count === target){
            res++; 
            count = 0;

            if(res === 2 && i < arr.length - 1) return true;
        }
        // console.log(res, num, count, target)
    }

    return false
};