function countGoodSubstrings(s: string): number {
    let count = 0; 

    for(let i = 0; i < s.length - 2; i++){
        if(new Set(s.substring(i, i + 3).split("")).size === 3) count++
    }

    return count
};