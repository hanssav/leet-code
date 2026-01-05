function daysBetweenDates(date1: string, date2: string): number {
    const toDays = (date: string): number => {
        const [year, month, day] = date.split('-').map(Number);

        const isLeap = (y: number) =>
            y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);

        const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let days = 0;

        // hitung hari dari tahun sebelumnya
        for (let y = 1971; y < year; y++) {
            days += isLeap(y) ? 366 : 365;
        }

        // hitung hari dari bulan sebelumnya
        for (let m = 0; m < month - 1; m++) {
            days += months[m];
            if (m === 1 && isLeap(year)) days += 1;
        }

        // tambah hari
        days += day;

        return days;
    };

    return Math.abs(toDays(date1) - toDays(date2));
}
