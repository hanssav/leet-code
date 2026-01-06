function transpose(matrix: number[][]): number[][] {
    const r = matrix.length; 
    const c = matrix[0].length;  
    
    // const r = 2; 
    // const c = 3; 

    const res: number[][] = Array.from({length : c}, () => new Array(r).fill(0)); 
    
    for(let i = 0; i < r; i++){
        let temp: number[] = []; 

        for(let j = 0; j < c; j++){
            res[j][i] = matrix[i][j] 
        }
    }

    return res
};