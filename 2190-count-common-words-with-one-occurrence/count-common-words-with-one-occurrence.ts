function countWords(words1: string[], words2: string[]): number {
    let map2 = new Map(); 
    let map1 = new Map();

    for(const w of words2){
        map2.set(w, (map2.get(w) || 0) + 1)
    }

    for(const w of words1){
        map1.set(w, (map1.get(w) || 0) + 1)
    }

    let count = 0;

    for(const w of words1){
        if(map2.get(w) === 1 && map1.get(w) === 1) {
            count++

            map2.set(w, map2.get(w) - 1);
        }
    }

    return count;
};