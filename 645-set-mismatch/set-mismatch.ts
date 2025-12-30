function findErrorNums(nums: number[]): number[] {
    let res: number[] = []
    const len = nums.length; 

    const count = new Array(len + 1).fill(0)
    
    let duplicate = -1; 
    let missing = -1; 

    for(let num of nums){
        count[num]++
    }
    
    for(let i = 1; i <= len; i++){
        if(count[i] === 2){
            duplicate = i; 
        } else if(count[i] === 0){
            missing = i;
        }
    }
    
    return [duplicate, missing]
};