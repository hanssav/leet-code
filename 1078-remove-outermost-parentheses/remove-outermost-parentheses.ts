function removeOuterParentheses(s: string): string {
    let res = ""
    const stack = []; 

    for(let str of s){
        if(str === "("){
            if(stack.length > 0){
                res += str; 
            }
            stack.push(str);
        } else {
            stack.pop(); 
            if(stack.length > 0){
                res += str
            }
        }

    }

    return res
};