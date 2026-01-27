function kthDistinct(arr: string[], k: number): string {
    const counts = new Map<string, number>();

    for (const s of arr) {
        counts.set(s, (counts.get(s) || 0) + 1);
    }

    let distinctCount = 0; 
    for (const s of arr) {
        // Jika frekuensinya cuma 1, berarti dia distinct
        if (counts.get(s) === 1) {
            distinctCount++;
            if (distinctCount === k) {
                return s;
            }
        }
    }

    return "";
};