function numPairsDivisibleBy60(time: number[]): number {
    let res = 0; 
    
    //array for saving freq mod (0-59) 
    const remainders = new Array(60).fill(0)

    for(let t of time){
        const r = t % 60; 

        // Cari pasangan yang cocok
        // Jika r = 20, pasangannya sisa 40 (60-20)
        // Jika r = 0, pasangannya sisa 0 ((60-0)%60)
        const target = (60 - r) % 60; 

        // Tambahkan jumlah pasangan yang sudah pernah muncul sebelumnya
        res += remainders[target];

        // Catat sisa bagi lagu ini untuk pasangan di masa depan
        remainders[r]++;
    }

    return res
};