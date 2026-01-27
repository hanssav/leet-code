function removeAnagrams(words: string[]): string[] {
    const res: string[] = []; 
    
    function sortWord(w: string): string {
        if(!w) return ""
        return w.split("").sort().join("");
    }

    for(let i = 0; i < words.length; i++){
        if(i === 0 || sortWord(words[i]) !== sortWord(words[i - 1])){
            res.push(words[i])
        }
    }

    return res;
};