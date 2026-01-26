function oddCells(m: number, n: number, indices: number[][]): number {
    // const matrixs = Array.from({length: m}, () => new Array(n).fill(0)) 

    const rowCount = new Array(m).fill(0); 
    const colCount = new Array(n).fill(0)
    
    for(let [ri, ci] of indices){
        rowCount[ri]++; 
        colCount[ci]++;
    }

    let addRow = 0; 

    for(let i = 0; i < m; i++){
        if(rowCount[i] % 2 === 1) addRow++ 
    }

    let addCol = 0; 

    for(let i = 0; i < n; i++){
        if(colCount[i] % 2 === 1) addCol++;
    }

    const evenRow = m - addRow; 
    const evenCol = n - addCol; 

    return (addRow * evenCol) + (evenRow * addCol);
};