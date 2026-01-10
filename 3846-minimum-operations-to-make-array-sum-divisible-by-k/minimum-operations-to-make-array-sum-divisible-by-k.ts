function minOperations(nums: number[], k: number): number {
    // let total = nums.reduce((acc, curr) => acc + curr, 0); 
    let total = 0; 
    // for(let num of nums){
    //     total += num
    // }

    for(let i = 0; i < nums.length; i++){
        total += nums[i]
    }

    const need = total % k; 
    return total === 0 ? total : need
};