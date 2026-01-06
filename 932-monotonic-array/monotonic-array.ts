function isMonotonic(nums: number[]): boolean {
    // const base = nums[1] - nums[0] > 0 ? 1 : -1; 

    // for(let i = 2; i < nums.length; i++){
    //     const temp = nums[i] - nums[i - 1];
    //     if(temp > 0 && base < 0) return false; 
    //     else if(temp < 0 && base > 0) return false
    // }

    let mark = 0; 

    for(let i = 1; i < nums.length; i++){
        const diff = nums[i] - nums[i - 1]; 

        if(mark === 0 && diff !== 0) mark = diff; 

        if(diff > 0 && mark < 0) return false; 
        else if(diff < 0 && mark > 0) return false
    }

    return true
};