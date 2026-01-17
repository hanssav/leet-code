function permute(nums: number[]): number[][] {
    let res: number[][] = []; 
    const n = nums.length - 1;
    // bctr = backtracking
    const bctr = (start: number, curr: number[]) => {
        if(start === n){
            res.push([...curr])
            return;
        }

        for(let i = start; i <= n; i++){
            [nums[start], nums[i]] = [nums[i], nums[start]]; 
            bctr(start + 1, curr); 
            [nums[i], nums[start]] = [nums[start], nums[i]]
        }
    }

    bctr(0, nums); 

    return res;
};