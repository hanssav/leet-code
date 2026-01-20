function checkOnesSegment(s: string): boolean {
    for (let i = 1; i < s.length; i++) {
        // Jika kita menemukan '1' tapi karakter sebelumnya adalah '0'
        // Berarti ini adalah segmen '1' yang baru (terpisah)
        if (s[i] === '1' && s[i - 1] === '0') {
            return false;
        }
    }
    return true;
};