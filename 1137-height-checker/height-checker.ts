function heightChecker(heights: number[]): number {
    const origin = [...heights];
    heights.sort((a,b) => a - b); 

    let count = 0; 
    for(let i = 0; i < origin.length; i++){
        if(origin[i] !== heights[i]) count++;
    }

    return count;
};