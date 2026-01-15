function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b); 

    let count = Infinity;

    console.log(nums, 'nums')

    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1; 

        while(right > left){
            let sum = nums[i] + nums[left] + nums[right]; 

            if(sum > target) {
                right--;
            } else if(sum < target)left++
            else {
                left++
                right--;
            }

            if(Math.abs(count - target) > Math.abs(sum - target)) count = sum;
            else if(count === target) return count
            // console.log(sum, sum-target, count)
        }
    }   

    return count;
};