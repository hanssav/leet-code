function minDeletionSize(strs: string[]): number {
    let count = 0; 
    const col_length = strs[0].length; 
    const row_length = strs.length; 

    for(let i = 0; i < col_length; i++){
        for(let j = 1; j < row_length; j++){
            if(strs[j][i] < strs[j - 1][i]){
                count++
                break;
            }
        }
    }

    return count
};