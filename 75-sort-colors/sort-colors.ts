/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Tukar ke kiri
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Tetap di tengah
            mid++;
        } else {
            // Tukar ke kanan
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // mid tidak bertambah karena kita perlu cek angka baru hasil tukaran
        }
    }
}