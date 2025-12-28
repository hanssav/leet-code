function findLUSlength(a: string, b: string): number {
    const a_len = a.length;  
    const b_len = b.length; 

    if(a === b) return -1; 

    return Math.max(a_len, b_len)
};