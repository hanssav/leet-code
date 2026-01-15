function maximumGap(nums: number[]): number {
    const n = nums.length; 

    const max = Math.max(...nums); 
    const min = Math.min(...nums); 

    if(min === max) return 0; 

    let bucket_size = Math.max(1, Math.floor((max - min) / (n - 1))); 
    let num_buckets = Math.floor((max - min) / bucket_size) + 1; 

    let bucket_min = new Array(num_buckets).fill(Infinity)
    let bucket_max = new Array(num_buckets).fill(-Infinity)
    
    // Masukkan angka ke bucket (Linear Time O(n))
    for(let x of nums){
        let idx = Math.floor((x - min) / bucket_size); 
        bucket_min[idx] = Math.min(bucket_min[idx], x)
        bucket_max[idx] = Math.max(bucket_max[idx], x)
    }

    let max_gap = 0; 
    let prev_max = min; 

    for(let i = 0; i < num_buckets; i++){
        if(bucket_min[i] === Infinity) continue; 

        max_gap = Math.max(max_gap, bucket_min[i] - prev_max); 
        prev_max = bucket_max[i]
    }

    return max_gap;
};