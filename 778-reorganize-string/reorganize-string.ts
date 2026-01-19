function reorganizeString(s: string): string {
    const m = new Map<string, number>(); 

    for(const str of s){
        m.set(str, (m.get(str) || 0) + 1);
    }

    const sorted = [...m.entries()].sort((a, b) => b[1] - a[1]);
    const max_freq = sorted[0][1];

    if(max_freq > Math.ceil(s.length / 2)) return "";

    const res = new Array(s.length);
    let index = 0; 

    for(const [char, freq] of sorted){
        let count = freq;

        while(count > 0){
            if(index >= s.length){
                index = 1;
            }

            res[index] = char;
            index += 2;
            count --;
        }
    }
    return res.join("")
};