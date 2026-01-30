function maxCount(m: number, n: number, ops: number[][]): number {
    let min_ai = m; 
    let min_bi = n;

    for(const [ai, bi] of ops){
        min_ai = Math.min(min_ai, ai);
        min_bi = Math.min(min_bi, bi);
    }

    return min_ai * min_bi;
};  