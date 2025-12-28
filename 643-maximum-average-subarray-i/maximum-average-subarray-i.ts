function findMaxAverage(nums: number[], k: number): number {
    let init = nums.slice(0, k).reduce((acc, curr) => acc + curr, 0)
    let max = init / k; 

    for(let i = 0; i <= nums.length - k; i++){
        const calc = init / k;

        if(calc > max) max = calc; 

        if (i + k < nums.length) {
            init = init - nums[i] + nums[i + k];
        }
    }

    return max
};