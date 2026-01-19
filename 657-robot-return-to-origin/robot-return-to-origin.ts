function judgeCircle(moves: string): boolean {
    let x = 0;
    let y = 0;

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        
        // Menggunakan if atau switch jauh lebih cepat daripada akses objek
        if (move === 'U') y++;
        else if (move === 'D') y--;
        else if (move === 'R') x++;
        else if (move === 'L') x--;
    }

    // Kembali ke awal jika posisi akhir adalah (0,0)
    return x === 0 && y === 0;
}

// function judgeCircle(moves: string): boolean {
//     const nav = {
//         "U": [-1, 0], 
//         "D": [1, 0], 
//         "R": [0, 1], 
//         "L": [0, -1],
//     }  

//     let curr = [0, 0];

//     for(let move of moves){
//         curr[0] += nav[move][0]
//         curr[1] += nav[move][1]
//     }

//     return curr[0] === 0 && curr[1] === 0 ? true : false;
// };