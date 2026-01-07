function isPathCrossing(path: string): boolean {
    /* 
        let say: 
        N = [-1 , 0]; 
        S = [+1, 0]
        E = [0, -1];
        W = [0, + 1] 
    */

    const dir: Record<string, number[]> = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    };

    let x = 0;
    let y = 0;

    const visited = new Set<string>();
    visited.add(`${x},${y}`);

    for (const p of path) {
        const [dx, dy] = dir[p];
        x += dx;
        y += dy;

        const pos = `${x},${y}`;
        
        // Jika koordinat baru sudah pernah dikunjungi, berarti berpotongan
        if (visited.has(pos)) {
            return true;
        }
        
        visited.add(pos);
    }

    return false;
    return false
};