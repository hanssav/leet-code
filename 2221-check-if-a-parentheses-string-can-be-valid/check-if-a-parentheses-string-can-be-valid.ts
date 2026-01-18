function canBeValid(s: string, locked: string): boolean {
    const n = s.length;
    if (n % 2 !== 0) return false;
    
    let left = 0; 
    let right = n - 1;

    let balance = 0;
    while(left < s.length){
        if(locked[left] === "0" || s[left] === "(") balance++;
        else balance--; 

        if(balance < 0) return false;
        left++;
    }

    balance = 0;
    while(right >= 0){
        if(locked[right] === "0" || s[right] === ")") balance++; 
        else balance--;

        if(balance < 0) return false;
        right--;
    }

    return true
};