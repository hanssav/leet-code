function lengthOfLastWord(s: string): number {
    const clean_s = s.trim(); 
    const arr_s = clean_s.split(" ")
    
    return arr_s[arr_s.length-1].length
};