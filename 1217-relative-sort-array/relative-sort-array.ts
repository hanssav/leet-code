function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    // Map untuk menyimpan frekuensi kemunculan setiap angka
    const freq = new Map<number, number>();
    
    // Hitung frekuensi setiap elemen di arr1
    for (const num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    const res: number[] = [];
    
    // Tambahkan elemen sesuai urutan di arr2
    for (const num of arr2) {
        const count = freq.get(num);
        if (count !== undefined) {
            // Tambahkan sebanyak frekuensinya
            for (let i = 0; i < count; i++) {
                res.push(num);
            }
            // Hapus dari map
            freq.delete(num);
        }
    }
    
    // Elemen yang tersisa (tidak ada di arr2) harus diurutkan ascending
    const remaining: number[] = [];
    for (const [num, count] of freq) {
        for (let i = 0; i < count; i++) {
            remaining.push(num);
        }
    }
    remaining.sort((a, b) => a - b);
    
    // Gabungkan hasil
    return res.concat(remaining);
}