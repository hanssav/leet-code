function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b); 

    let lastUniq = -1; 
    let count = 0; 

    for(const num of nums){
        if(num <= lastUniq){
            const targetValue = lastUniq + 1; 
            count += (targetValue - num);
            lastUniq = targetValue;
        } else {
            lastUniq = num;
        }
    }
    return count;
};