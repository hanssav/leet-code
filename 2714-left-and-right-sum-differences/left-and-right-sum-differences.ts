function leftRightDifference(nums: number[]): number[] {
    let sum_r = nums.reduce((acc, curr) => acc + curr, 0); 
    let sum_l = 0; 

    const res: number[] = []; 

    for(let i = 0; i < nums.length; i++){
        res.push(Math.abs((sum_l += (nums[i - 1] || 0)) - (sum_r -= nums[i]))); 
    }

    return res;
};