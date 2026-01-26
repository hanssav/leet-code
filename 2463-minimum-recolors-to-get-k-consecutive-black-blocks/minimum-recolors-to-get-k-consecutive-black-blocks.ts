function minimumRecolors(blocks: string, k: number): number {
    let min = Infinity;

    for(let i = 0; i <= blocks.length - k; i++){
        let block = blocks.substring(i, i + k); 

        let white = 0; 

        for(const str of block){
            if(str === "W") white++;
        }

        if(min > white) min = white;
    }

    return min;
};