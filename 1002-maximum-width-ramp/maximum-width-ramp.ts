function maxWidthRamp(nums: number[]): number {
    const stack: number[] = [];
    let max = 0;
    
    for (let j = 0; j < nums.length; j++) {
        if (stack.length === 0 || nums[j] < nums[stack[stack.length - 1]]) {
            stack.push(j);
        } else {
            // Binary search to find leftmost valid i
            let left = 0, right = stack.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[stack[mid]] <= nums[j]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            if (left < stack.length) {
                max = Math.max(max, j - stack[left]);
            }
        }
    }
    
    return max;
}

// function maxWidthRamp(nums: number[]): number {
//     const n = nums.length;
//     const rightMax = new Array(n);
    
//     // Precompute max values from right
//     rightMax[n - 1] = nums[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//         rightMax[i] = Math.max(nums[i], rightMax[i + 1]);
//     }
    
//     let i = 0, j = 1, max = 0;
    
//     while (j < n) {
//         if (nums[i] <= rightMax[j]) {
//             max = Math.max(max, j - i);
//             j++;
//         } else {
//             i++;
//             if (i === j) j++;
//         }
//     }
    
//     return max;
// }

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

// function maxWidthRamp(nums: number[]): number {
//     const indices: number[] = Array.from({ length: nums.length }, (_, i) => i);
    
//     // Sort indices based on their corresponding values
//     indices.sort((a, b) => nums[a] - nums[b] || a - b);
    
//     let maxWidth = 0;
//     let minIndex = nums.length;
    
//     // Find maximum difference where larger index comes after smaller index
//     for (const idx of indices) {
//         maxWidth = Math.max(maxWidth, idx - minIndex);
//         minIndex = Math.min(minIndex, idx);
//     }
    
//     return maxWidth;
// }