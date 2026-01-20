function invalidTransactions(transactions: string[]): string[] {
    const parsed = transactions.map(t => {
        const [name, time, amount, city] = t.split(","); 

        return {name, time: Number(time), amount: Number(amount), city, raw: t};
    })

    const invalid = new Array(transactions.length).fill(false);

    for(let i = 0; i < transactions.length; i++){
        if(parsed[i].amount > 1000) invalid[i] = true;

        for(let j = i; j < parsed.length; j++){
            if(parsed[i].name === parsed[j].name && 
                parsed[i].city !== parsed[j].city && 
                (Math.abs(parsed[i].time - parsed[j].time) <= 60)
            ){
                invalid[i] = true;
                invalid[j] = true;
            }
        }
    }

    return transactions.filter((_, idx) => invalid[idx]);
};