function exist(board: string[][], word: string): boolean {
    const row = board.length;
    const col = board[0].length; 
    
    const visited = Array.from({length: row}, () => new Array(col).fill(false)); 

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const backtrack = (r: number, c: number, curr) => {
        if(curr === word.length - 1) return true; 

        visited[r][c] = true;

        for(const [dr, dc] of directions){
            let nr = r + dr; 
            let nc = c + dc; 

            // 1. Cek batas papan
            // 2. Cek apakah hurufnya cocok dengan huruf kata selanjutnya
            // 3. Cek apakah kotak belum dikunjungi
            if (
                nr >= 0 && nr < row 
                && nc >= 0 && nc < col 
                && !visited[nr][nc] 
                && board[nr][nc] === word[curr + 1]
            ) {      
                // Jika jalur ini tembus sampai akhir, langsung return true
                if (backtrack(nr, nc, curr + 1)) return true;
            }
        }

        visited[r][c] = false;
        return false;
    }

    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){
            if(board[r][c] === word[0]){
                if(backtrack(r, c, 0)) return true; 
            }
        }
    }

    // console.log(visited, 'visited')
    return false;
};