function minTimeToType(word: string): number {
    let totalTime = 0;
    let currentPos = 'a'.charCodeAt(0);

    for (let i = 0; i < word.length; i++) {
        let nextPos = word.charCodeAt(i);
        
        // 1. Hitung selisih jarak antar karakter
        let diff = Math.abs(nextPos - currentPos);
        
        // 2. Pilih yang lebih pendek: jalan biasa atau memutar balik lewat Z-A
        let moveTime = Math.min(diff, 26 - diff);
        
        // 3. Tambahkan waktu gerak + 1 detik untuk mengetik (press)
        totalTime += moveTime + 1;
        
        // 4. Update posisi sekarang ke huruf yang baru diketik
        currentPos = nextPos;
    }

    return totalTime;
};