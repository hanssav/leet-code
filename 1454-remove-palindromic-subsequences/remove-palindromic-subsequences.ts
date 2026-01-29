function removePalindromeSub(s: string): number {
    if(s.length === 0) return 0; 

    const isPalindrome = s === s.split("").reverse().join(""); 

    return isPalindrome ? 1 : 2;
};