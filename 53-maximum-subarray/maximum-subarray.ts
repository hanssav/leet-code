function maxSubArray(nums: number[]): number {
    let max = nums[0]; 

    let curr_sum = nums[0] 

    for(let i = 1; i < nums.length; i++){
        curr_sum = Math.max(curr_sum + nums[i], nums[i]); 

        max = Math.max(max, curr_sum)
    }

    return max;
};