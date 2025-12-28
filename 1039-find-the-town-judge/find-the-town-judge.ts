function findJudge(n: number, trust: number[][]): number {
    if (trust.length === 0) return n === 1 ? 1 : -1;
    
    const key = new Map(); 
    const target = new Map();

    for(let [p, t] of trust){
        if(!key.has(t)) key.set(t, 0); 
        if(!target.has(p)) target.set(p, 0);

        key.set(t, key.get(t) + 1); 
        target.set(p, target.get(p) + 1);
    }


    for(let [p, t] of trust){
        if(key.get(t) === n - 1 && !target.has(t)) return t
    }

    return -1
};