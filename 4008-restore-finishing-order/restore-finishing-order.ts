function recoverOrder(order: number[], friends: number[]): number[] {
    const res: number[] = []; 
    const s = new Set(friends); 

    for(let ord of order){
        if(s.has(ord)) res.push(ord)
    }

    return res
};