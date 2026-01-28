function repeatedNTimes(nums: number[]): number {
    const s = new Set(); 

    for(const num of nums){
        if(s.has(num)) return num; 

        s.add(num);
    }
};