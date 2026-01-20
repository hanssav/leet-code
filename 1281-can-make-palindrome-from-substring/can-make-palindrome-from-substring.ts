function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
    const n = s.length; 

    const prefix = Array.from({length: n + 1}, () => new Int32Array(26))

    for (let i = 0; i < n; i++) {
        prefix[i + 1].set(prefix[i]);
        const charIndex = s.charCodeAt(i) - 97; // a=0, b=1, ...
        prefix[i + 1][charIndex]++;
    }

    const res: boolean[] = [];
    for (const [start, end, k] of queries) {
        let oddCount = 0;
        
        // Cek 26 huruf, apakah jumlahnya ganjil di range [start, end]
        for (let j = 0; j < 26; j++) {
            const count = prefix[end + 1][j] - prefix[start][j];
            if (count % 2 === 1) oddCount++;
        }

        // Pakai rumus yang sudah kita sepakati
        res.push(Math.floor(oddCount / 2) <= k);
    }

    return res;
    // const res: boolean[] = []
    // for(const [start, end, k] of queries){
    //     const sub = s.substring(start, end + 1); 
    //     const add = count_string(sub);

    //     res.push(Math.floor(add / 2) <= k);
    // }

    // return res;
};