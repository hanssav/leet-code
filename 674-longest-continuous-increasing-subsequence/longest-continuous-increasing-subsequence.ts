function findLengthOfLCIS(nums: number[]): number { 
    const len = nums.length; 
    if(len === 0) return 0;
    let max = 1; 
    let max_curr = 1; // assume for first index

    for(let i = 1; i < len; i++){

        if(nums[i] > nums[i - 1]){
            max_curr += 1;
        } else {
            max_curr = 1;
        }
        if(max_curr > max) max = max_curr
    }

    return max;
};