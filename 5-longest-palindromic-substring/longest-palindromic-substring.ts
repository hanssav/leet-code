function longestPalindrome(s: string): string {
    if (s.length < 2) return s;

    let start = 0; 
    let end = 0; 

    const expand_center = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--
            right++
        }

        if(right - left - 1 > end - start){
            start = left + 1; 
            end = right - 1; 
        }
    }   

    for(let i = 0; i < s.length; i++){
        expand_center(i, i) // singgle center ex: aba
        expand_center(i, i + 1) // multi center ex: abba
    }

    return s.substring(start, end + 1)
};