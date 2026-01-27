function countSeniors(details: string[]): number {
    // 10 + 1 (gender) + age
    let count = 0; 
    for(const d of details){
        const age = Number(d.substring(11, 11 + 2)); 
    
        if(age > 60) count++;
    };

    return count;
};