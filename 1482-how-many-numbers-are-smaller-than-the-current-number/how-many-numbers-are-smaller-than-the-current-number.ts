function smallerNumbersThanCurrent(nums: number[]): number[] {
    let res: number[] = [];
    const len = nums.length; 

    for(let i = 0; i < len; i++){
        let count = 0; 

        for(let j = 0; j < len; j++){
            if(nums[i] > nums[j]){
                count++
            }
        }

        res.push(count)
    }
    
    return res
};