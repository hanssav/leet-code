function numOfStrings(patterns: string[], word: string): number {
    let count = 0;

    for(let s of patterns){
        if(word.includes(s)) count++
    }

    return count;
};