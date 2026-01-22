function maximumCount(nums: number[]): number {
    // Binary search untuk mencari batas antara negatif dan non-negatif
    function binarySearch(target: number, findFirstGreater: boolean): number {
        let left = 0;
        let right = nums.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            if (findFirstGreater ? nums[mid] > target : nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    // Index pertama elemen >= 0 (jumlah negatif)
    const firstZeroOrPositive = binarySearch(0, false);
    const negativeCount = firstZeroOrPositive;
    
    // Index pertama elemen > 0 (jumlah positif)
    const firstPositive = binarySearch(0, true);
    const positiveCount = nums.length - firstPositive;
    
    return Math.max(negativeCount, positiveCount);
}