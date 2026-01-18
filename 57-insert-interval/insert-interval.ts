function insert(intervals: number[][], newInterval: number[]): number[][] {
    let res: number[][] = [];
    let i = 0;
    const n = intervals.length;

    // 1. Tambahkan semua interval yang sepenuhnya sebelum newInterval
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // 2. Merge semua interval yang overlap dengan newInterval
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    res.push(newInterval); // Push interval yang sudah di-merge

    // 3. Tambahkan semua interval setelah newInterval
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};