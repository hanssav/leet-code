function findWords(words: string[]): string[] {
    const rows = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm")
    ];
    
    const res = []

    for(let strs of words){
        const s = strs.toLowerCase()

        const idx = rows.findIndex((row) => row.has(s[0]))
        const target_row = rows[idx]

        // console.log(s, idx, target_row)

        if(s.split('').every((str) => target_row.has(str))){
            res.push(strs)
        }
    }

    return res
};