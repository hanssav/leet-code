function transformArray(nums: number[]): number[] {
    let res = []; 

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0) res.unshift(0); 
        else res.push(1);
    }

    return res; 
};