function freqAlphabets(s: string): string {
    let res = ""; 
    let i = 0;

    while(i < s.length){
        let char = ""
        if(s[i + 2] === "#"){
            char = String.fromCharCode(96 + Number(`${s[i]}${s[i+1]}`));  
            i += 3
        } else {
            char = String.fromCharCode(96 + Number(s[i]))
            i++;
        }
        res += char;

    }

    return res;
};