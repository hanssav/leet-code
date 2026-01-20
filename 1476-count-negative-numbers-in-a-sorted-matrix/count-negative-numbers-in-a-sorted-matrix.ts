function countNegatives(grid: number[][]): number {
    let count = 0; 

    const rows = grid.length; 
    const cols = grid[0].length; 

    let r = rows - 1; 
    let c = 0;

    while(r >= 0 && c <= cols){
        if (grid[r][c] < 0) {
            // Jika grid[r][c] negatif, maka semua elemen 
            // dari kolom c sampai akhir baris r adalah negatif
            count += (cols - c);
            r--; // Naik ke baris atas
        } else {
            c++; // Geser ke kanan untuk mencari angka negatif
        }
    }
    return count;
};