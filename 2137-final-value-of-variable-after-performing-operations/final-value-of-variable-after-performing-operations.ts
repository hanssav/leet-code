function finalValueAfterOperations(operations: string[]): number {
    let count = 0; 

    for(const opr of operations){
        if(opr.includes("+")) count++; 
        else count--
    }  

    return count
};