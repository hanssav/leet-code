function frequencySort(nums: number[]): number[] {
    const counts = new Map<number, number>(); 

    for(const num of nums){
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    // Sort: value ASC, lalu key DESC
    const sortedArr = [...counts.entries()].sort((a, b) => {
        // a = [key, value], b = [key, value]
        
        // 1. Bandingkan VALUE dulu (ascending)
        if (a[1] !== b[1]) {
            return a[1] - b[1]; // value ascending
        }
        
        // 2. Jika value sama, bandingkan KEY (descending)
        return b[0] - a[0]; // key descending
    });

    const res = []
    for(const [key, val] of sortedArr){
        for(let i = 0; i < val; i++){
            res.push(key);
        }
    }

    return res;
};