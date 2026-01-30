function find132pattern(nums: number[]): boolean {
    let n = nums.length;
    let s3 = -Infinity; // Ini adalah kandidat angka "2" (terbesar yang mungkin)
    let stack: number[] = []; // Wadah untuk angka di kanan (kandidat "3")

    // Jalan mundur dari kanan ke kiri
    for (let i = n - 1; i >= 0; i--) {
        // JIKA angka sekarang < s3, berarti kita nemu pola 1-3-2!
        // (nums[i] adalah "1", stack top adalah "3", s3 adalah "2")
        if (nums[i] < s3) return true;

        // JIKA angka sekarang lebih besar dari isi stack,
        // pindahkan angka dari stack ke s3.
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            s3 = stack.pop()!;
        }

        // Masukkan angka sekarang ke stack
        stack.push(nums[i]);
    }

    return false;
}