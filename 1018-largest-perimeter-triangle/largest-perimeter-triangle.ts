function largestPerimeter(nums: number[]): number {
    // Urutkan dari kecil ke besar
    nums.sort((a, b) => a - b); 

    // Mulai dari angka terbesar di paling kanan
    // Kita butuh setidaknya 3 angka, jadi berhenti di i = 2
    for(let i = nums.length - 1; i >= 2; i--){
        if(nums[i-2] + nums[i - 1] > nums[i]){
            return nums[i - 2] + nums[i - 1] + nums[i];
        }
    }

    return 0;
};