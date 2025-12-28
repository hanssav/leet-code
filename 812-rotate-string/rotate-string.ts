function rotateString(s: string, goal: string): boolean {
    const split = s.split(""); 

    for(let i = 0; i < s.length; i++){
        if(split.join("") === goal) return true;

        const pop = split.pop(); 
        split.unshift(pop); 
    }

    return false
};