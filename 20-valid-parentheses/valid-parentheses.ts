function isValid(s: string): boolean {
    const map = new Map() 

    map.set(']', '[')
    map.set(')', '(')
    map.set('}', '{')
    console.log(map)

    const stack: string[] = []; 
    for(let i = 0; i < s.length; i++){
        const hasValue = [...map.values()].includes(s[i])

        if(hasValue){
            stack.push(s[i])
        } 
        
        if(map.has(s[i])){
            if(stack.length === 0) return false
            
            const top_element = stack[stack.length-1]
            
            if(top_element === map.get(s[i])){
                stack.pop()
            }  else { return false }
        }

    }

    return stack.length === 0 ? true : false
};  