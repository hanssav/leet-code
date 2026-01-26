function decrypt(code: number[], k: number): number[] {
    const n = code.length;
    const result = new Array(n).fill(0);
    
    if (k === 0) {
        return result; // Semua 0
    }
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        
        if (k > 0) {
            // Ambil k elemen ke kanan
            for (let j = 1; j <= k; j++) {
                const idx = (i + j) % n; // Wrap-around
                sum += code[idx];
            }
        } else {
            // k < 0: ambil |k| elemen ke kiri
            for (let j = 1; j <= Math.abs(k); j++) {
                // Untuk kiri, kita perlu wrap-around ke belakang
                let idx = i - j;
                if (idx < 0) {
                    idx += n; // Wrap-around ke ujung array
                }
                sum += code[idx];
            }
        }
        
        result[i] = sum;
    }
    
    return result;
}