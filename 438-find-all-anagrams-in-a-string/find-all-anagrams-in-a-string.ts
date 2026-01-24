function findAnagrams(s: string, p: string): number[] {
    const res: number[] = []; 
    if (s.length < p.length) return res;

    const pCount = new Array(26).fill(0); 
    const sCount = new Array(26).fill(0); 
    const charCodeA = 'a'.charCodeAt(0);
    
    // 1. Isi frekuensi awal untuk p dan jendela pertama s
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - charCodeA]++;
        sCount[s.charCodeAt(i) - charCodeA]++;
    }
    // Fungsi pembantu untuk membandingkan dua array frekuensi
    const isMatch = () => pCount.every((val, index) => val === sCount[index]);

    // Cek jendela pertama
    if (isMatch()) res.push(0);

    // 2. Sliding Window
    for (let i = p.length; i < s.length; i++) {
        // Tambahkan karakter baru yang masuk jendela
        sCount[s.charCodeAt(i) - charCodeA]++;
        // Hapus karakter yang keluar dari jendela
        sCount[s.charCodeAt(i - p.length) - charCodeA]--;

        // Cek apakah jendela sekarang cocok dengan pCount
        if (isMatch()) {
            res.push(i - p.length + 1);
        }
    }

    return res;
};

// function findAnagrams(s: string, p: string): number[] {
//     const res = []; 
//     const sp = p.split("").sort().join("");

//     for(let i = 0; i < s.length; i++){
//         const curr = s.slice(i, i + p.length).split("").sort().join(""); 
//         if(curr === sp) res.push(i)
//     }

//     return res;
// };