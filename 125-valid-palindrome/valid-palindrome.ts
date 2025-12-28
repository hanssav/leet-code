function isPalindrome(s: string): boolean { 
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let right = s.length - 1; 
    let left = 0; 

    while(right > left){
        if(s[left] !== s[right]){
            return false
        }

        right--
        left++
    }

    return true
};