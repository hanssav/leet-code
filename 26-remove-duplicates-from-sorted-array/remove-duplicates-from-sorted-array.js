/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(numbers) {
//     return numbers.reduce((acc, curr) => {
//         if(!acc.includes(curr)) {
//             acc.push(curr)
//         }
//         return acc
//     }, [])
// };

var removeDuplicates = function(nums) {
    // if (nums.length === 0) return 0;
    
    // let k = 1; // pointer untuk posisi unik berikutnya

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] !== nums[i - 1]) {
    //         nums[k] = nums[i];
    //         k++;
    //         console.log(nums, i)
    //     }
    // }


    // return k;

    let i = nums.length - 1; 

    while(i >= 0){
        if(nums[i] === nums[i-1]) {nums.splice(i, 1)}; 
        i--
    }
};
