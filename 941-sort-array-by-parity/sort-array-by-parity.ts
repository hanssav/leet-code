function sortArrayByParity(nums: number[]): number[] {
    let left: number = 0;
    let right: number = nums.length - 1; 

    while(right > left){
        if(nums[left] % 2 === 0) left++
        else if(nums[right] % 2 !== 0) right--; 
        else {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--; 
        }
        // let num_r = nums[right]; 
        // let num_l = nums[left];         

        // if(num_l % 2 !== 0 && num_r % 2 === 0){
        //     [nums[left], nums[right]] = [nums[right], nums[left]]
        //     left++;
        //     right--; 
        // } else if(num_l % 2 !== 0) left++
        // else right--; 
    } 

    return nums
};