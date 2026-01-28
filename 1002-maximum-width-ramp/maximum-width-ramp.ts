// function maxWidthRamp(nums: number[]): number {
//     let max = 0;
//     const n = nums.length;

//     for(let i = 0; i < n; i++){
//         if(i + max + 1 >= n) break;

//         let j = n - 1;

//         while (j > i + max) {
//             if(nums[j] >= nums[i]) {
//                 max = Math.max(max, j - i);
//                 break; 
//             }
//             j--;
//         }
//     }

//     return max;
// };

function maxWidthRamp(nums: number[]): number {
    const indices: number[] = Array.from({ length: nums.length }, (_, i) => i);
    
    // Sort indices based on their corresponding values
    indices.sort((a, b) => nums[a] - nums[b] || a - b);
    
    let maxWidth = 0;
    let minIndex = nums.length;
    
    // Find maximum difference where larger index comes after smaller index
    for (const idx of indices) {
        maxWidth = Math.max(maxWidth, idx - minIndex);
        minIndex = Math.min(minIndex, idx);
    }
    
    return maxWidth;
}