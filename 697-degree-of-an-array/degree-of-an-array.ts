function findShortestSubArray(nums: number[]): number {
    // Kita simpan 3 informasi dalam satu objek agar tidak banyak buat Map/Array
    // num -> {count, first, last}
    const stats: Record<number, {c: number, f: number, l: number}> = {};
    let maxDegree = 0;

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (stats[x] === undefined) {
            stats[x] = { c: 1, f: i, l: i };
        } else {
            stats[x].c++;
            stats[x].l = i;
        }

        // Update degree tertinggi saat itu juga
        if (stats[x].c > maxDegree) {
            maxDegree = stats[x].c;
        }
    }

    let minLen = Infinity;

    // Loop hanya pada kunci yang ada di objek stats
    for (const x in stats) {
        const s = stats[x];
        if (s.c === maxDegree) {
            const currentLen = s.l - s.f + 1;
            if (currentLen < minLen) {
                minLen = currentLen;
            }
        }
    }

    return minLen;
}

// function findShortestSubArray(nums: number[]): number {
//     const degree = new Map(); 

//     let max_curr = 0; 

//     nums.forEach((val, idx) => {
//         if(!degree.has(val)) degree.set(val, []);

//         degree.get(val).push(idx)
        
//         const len = degree.get(val).length

//         if(len > max_curr) {
//             max_curr = len
//         }
//     })

//     let res = Infinity;

//     for(let [num, indices] of degree){
//         if(indices.length === max_curr){
//             const curr_len = indices[indices.length - 1] - indices[0] + 1; 

//             if(curr_len < res){
//                 res = curr_len; 
//             }
//         }
//     }

//     return res
// };