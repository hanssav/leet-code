function mostWordsFound(sentences: string[]): number {
    let max = 0; 

    for(const words of sentences){
        let len = words.split(" ").length;
        if(len > max) max = len;
    }

    return max
};