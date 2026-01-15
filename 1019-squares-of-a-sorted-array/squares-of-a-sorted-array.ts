function sortedSquares(nums: number[]): number[] {
    for(let [i, num] of nums.entries()) nums[i] = Math.pow(num, 2)

    return nums.sort((a, b) => a - b)
};