function longestPalindrome(s: string): number {
    const cart = new Set()  
    let len = 0; 
    
    for(let str of s){
        if(cart.has(str)){
            len += 2;
            cart.delete(str); 
        } else {
            cart.add(str)
        }
    }

    if(cart.size > 0){
        len += 1
    }

    return len
};  