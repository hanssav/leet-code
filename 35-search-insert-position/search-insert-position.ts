function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) return i; // ketemu atau harus insert sebelum nums[i]
    }
    return nums.length; // target lebih besar dari semua elemen → insert di akhir
}