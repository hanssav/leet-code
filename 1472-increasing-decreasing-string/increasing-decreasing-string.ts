function sortString(s: string): string {
    let counts = new Array(26).fill(0);
    let res = "";

    for(let char of s){
        counts[char.charCodeAt(0) - 97]++; // 97 adalah kode ASCII 'a'
    }

    while(res.length < s.length){
        for(let i = 0; i < counts.length; i++){
            if(counts[i] > 0){
                res += String.fromCharCode(i + 97);
                counts[i]--;
            }
        }

        for(let i = counts.length - 1; i >= 0; i--){
            if(counts[i] > 0){
                res += String.fromCharCode(i + 97); 
                counts[i]--;
            }
        }
    }

    return res;
};