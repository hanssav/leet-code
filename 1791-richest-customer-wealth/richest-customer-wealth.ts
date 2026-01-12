function maximumWealth(accounts: number[][]): number {
    let richest = 0; 

    for(let moneys of accounts){
        let count = moneys.reduce((acc, curr) => acc + curr, 0); 

        if(count > richest) richest = count;
    }

    return richest;
};