function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = [];
    
    const backtrack = (start: number) => {
        if (start === nums.length) {
            // Kita buat salinan array agar tidak berubah saat backtrack
            res.push([...nums]);
            return;
        }

        // Set ini hanya berlaku untuk level (posisi) saat ini
        const usedInThisLevel = new Set<number>();

        for (let i = start; i < nums.length; i++) {
            // Jika angka ini sudah pernah ditaruh di posisi 'start', lewati
            if (usedInThisLevel.has(nums[i])) continue;
            usedInThisLevel.add(nums[i]);
            // console.log(usedInThisLevel, 'usedInThisLevel');

            // Swap
            [nums[start], nums[i]] = [nums[i], nums[start]];
            
            backtrack(start + 1);
            
            // Backtrack (Tukar balik)
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    };

    backtrack(0);
    return res;
}