function maxProduct(nums: number[]): number {
    let max = 0; 
    const n = nums.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            const mp = (nums[i] - 1) * (nums[j] - 1)
            if(mp > max) max = mp;
        }
    }

    return max;
};