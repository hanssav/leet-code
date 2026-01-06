function isMonotonic(nums: number[]): boolean {
    let mark = 0; 

    for(let i = 1; i < nums.length; i++){
        const diff = nums[i] - nums[i - 1]; 

        if(mark === 0 && diff !== 0) mark = diff; 

        if(diff > 0 && mark < 0) return false; 
        else if(diff < 0 && mark > 0) return false
    }

    return true
};