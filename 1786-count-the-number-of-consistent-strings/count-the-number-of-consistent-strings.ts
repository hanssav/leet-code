function countConsistentStrings(allowed: string, words: string[]): number {
    let count = 0; 

    for(const word of words){
        const required = new Set(allowed.split(""))
        
        let is_allowed = true; 

        for(let s of word){
            if(!required.has(s)){
                is_allowed = false;
                break;
            }
        }

        if(is_allowed) count++;
    }

    return count;
};