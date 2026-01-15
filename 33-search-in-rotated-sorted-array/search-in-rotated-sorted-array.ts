function search(nums: number[], target: number): number {
    let left = 0; 
    let right = nums.length - 1; 

    while(right >= left){
        const mid = Math.floor((right + left) / 2); 

        if(target === nums[mid]) return mid

        if(nums[left] <= nums[mid]){
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        } else {
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        console.log(left, right)
    }

    return -1;
};