function createTargetArray(nums: number[], index: number[]): number[] {
    const res: number[] = [];
    for(let i = 0; i < nums.length; i++){
        res.splice(index[i], 0, nums[i])
    }

    return res;
};