function longestMountain(arr: number[]): number {
    let max = 0; 
    const n = arr.length;

    // Mulai dari 1 sampai n-2 karena ujung tidak bisa jadi puncak
    for (let i = 1; i < n - 1; i++) {
        // 1. Cek apakah ini PUNCAK
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let left = i;
            let right = i;

            // 2. Ekspansi ke kiri (cari kaki gunung kiri)
            while (left > 0 && arr[left] > arr[left - 1]) {
                left--;
            }

            // 3. Ekspansi ke kanan (cari kaki gunung kanan)
            while (right < n - 1 && arr[right] > arr[right + 1]) {
                right++;
            }

            // 4. Hitung total panjangnya
            let currentLength = right - left + 1;
            if (currentLength > max) {
                max = currentLength;
            }
        }
    }

    return max;
}