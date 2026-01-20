function countNegatives(grid: number[][]): number {
    let count = 0; 

    for(const g of grid){
        for(const c of g){
            if(c < 0) count++
        }
    }

    return count;
};