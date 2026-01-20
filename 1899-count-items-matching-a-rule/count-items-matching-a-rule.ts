function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let count = 0;

    for(const [type, color, name] of items){
        const item = {type, color, name}

        // console.log(rule)
        if(item[ruleKey] === ruleValue) count++;
    }

    return count;
};