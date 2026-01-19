function areAlmostEqual(s1: string, s2: string): boolean {
    if(s1 === s2) return true;

    let diff_ids: number[] = []; 

    for(let i = 0; i < s1.length; i++){
        if (s1[i] !== s2[i]) {
            diff_ids.push(i);
        }
        
        // Kalau bedanya sudah lebih dari 2, sudah pasti tidak bisa
        if (diff_ids.length > 2) return false;
    }

    // Jika bedanya cuma 1, tidak bisa ditukar (butuh sepasang)
    if (diff_ids.length !== 2) return false;
    // Cek apakah jika ditukar hasilnya sama
    // Misal s1[i] harus sama dengan s2[j] DAN s1[j] harus sama dengan s2[i]
    const [i, j] = diff_ids;
    return s1[i] === s2[j] && s1[j] === s2[i];
};