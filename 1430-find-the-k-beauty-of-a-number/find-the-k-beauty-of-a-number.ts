function divisorSubstrings(num: number, k: number): number {
    let count = 0; 
    const str = String(num)

    for(let i = 0; i <= str.length - k; i++){
        const dv = Number(str.substring(i, i + k));
        if(num % dv === 0) count++;
    }

    return count;
};