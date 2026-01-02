function reverseOnlyLetters(s: string): string {
    const regex = /[a-zA-Z]/;
    let left = 0; 
    let right = s.length - 1; 
    const strs = s.split(""); 

    while(right > left){
        let s_left = strs[left]; 
        let s_right = strs[right]; 

        if(s_left === "-" || !regex.test(s_left)) left++; 
        else if(s_right === "-" || !regex.test(s_right)) right--; 
        else {
            let temp = strs[right]; 
            strs[right] = strs[left];
            strs[left] = temp
            left++
            right--
        }
    }

    return strs.join("")
};