function majorityElement(nums: number[]): number[] {
    const n = nums.length; 
    const p = Math.floor(n / 3)

    const m = new Map(); 

    const uniq = new Set<number>();
    // const res = [];
    for(const num of nums){
        m.set(num, (m.get(num) || 0) + 1); 

        if(m.get(num) > p) uniq.add(num)
    }

    return [...uniq];
};