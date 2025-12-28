 // just note, this is not me

function validArrangement(pairs) {
    const paired = new Map();
    const inOut = new Map(); // Untuk cari start node

    pairs.forEach(([start, end], idx) => {
        if (!paired.has(start)) paired.set(start, new Map());
        paired.get(start).set(idx, end);
        
        // Hitung selisih jalan keluar & masuk
        inOut.set(start, (inOut.get(start) || 0) + 1);
        inOut.set(end, (inOut.get(end) || 0) - 1);
    });

    console.log(paired, 'paired', inOut, 'inOut')
    let res = [];
    
    // CARI START NODE: Jangan pakai forEach pairs, tapi cari yang Out-Degree = 1
    let startNode = pairs[0][0];
    for (let [node, diff] of inOut) {
        if (diff === 1) { startNode = node; break; }
    }

    function explore(u) {
        let neighbors = paired.get(u);
        if (neighbors) {
            // Ambil semua idx jalan dari node ini
            for (let [idx, end] of neighbors) {
                // Hapus jalan agar tidak dilewati lagi (gantinya visited)
                neighbors.delete(idx);
                explore(end);
                // Teknik Eulerian: Masukkan ke res dari belakang (Post-Order)
                res.push(pairs[idx]);
            }
        }
    }

    explore(startNode);
    return res.reverse();
}