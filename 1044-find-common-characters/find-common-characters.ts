function commonChars(words: string[]): string[] {
    // 1. Inisialisasi minFreq dengan frekuensi huruf kata pertama
    let minFreq = new Array(26).fill(Infinity);
    
    for (let word of words) {
        let currentFreq = new Array(26).fill(0);
        for (let char of word) {
            // Menghitung indeks a=0, b=1, dst
            currentFreq[char.charCodeAt(0) - 97]++;
        }
        
        // 2. Bandingkan dengan minFreq, ambil yang terkecil
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], currentFreq[i]);
        }
    }

    // 3. Masukkan ke hasil sesuai jumlah di minFreq
    const res: string[] = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            res.push(String.fromCharCode(i + 97));
            minFreq[i]--;
        }
    }

    return res;
}