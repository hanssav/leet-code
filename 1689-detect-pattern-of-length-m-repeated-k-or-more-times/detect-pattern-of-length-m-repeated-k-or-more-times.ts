function containsPattern(arr: number[], m: number, k: number): boolean {
    const n = arr.length;
    
    // Kita hanya perlu cek sampai n - m*k
    // karena butuh ruang untuk k pattern
    for (let i = 0; i <= n - m * k; i++) {
        let valid = true;
        
        // Cek k pattern berturut-turut
        for (let j = 0; j < m * k; j++) {
            // Bandingkan dengan pattern pertama
            if (arr[i + j] !== arr[i + (j % m)]) {
                valid = false;
                break;
            }
        }
        
        if (valid) return true;
    }
    
    return false;
}