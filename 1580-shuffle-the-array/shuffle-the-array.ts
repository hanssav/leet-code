function shuffle(nums: number[], n: number): number[] {
    const y = nums.splice(n, n); 
    const x = nums.splice(0, n)

    for(let i = 0; i < x.length; i++){
        nums.push(x[i])
        nums.push(y[i])
    }
    return nums
};