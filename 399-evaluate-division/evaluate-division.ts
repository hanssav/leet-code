function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    /* 
    1. values[i] = ai / bi
    2. queries[j] = [cj, dj] => cj / dj = ?; 

    return all queries, if cant determined(tdak dapat ditentukan) return -1.0;   

    input must be valid, 
    query will not results in division by zero(no result zero)
    */

    // Map <variable_name, Map<neighbor, ratio_value>>
    const graph = new Map<string, Map<string, number>>(); 

    for(let i = 0; i < equations.length; i++){
        const [u, v] = equations[i]; 
        const value = values[i]; 
        
        // 1. Inisialisasi jika belum ada di buku kontak
        if(!graph.has(u)) graph.set(u, new Map()); 
        if(!graph.has(v)) graph.set(v, new Map()); 

        // 2. Tambahkan jalur maju: u / v = value
        graph.get(u)!.set(v, value); 

        // 3. Tambahkan jalur balik: v / u = 1 / value
        graph.get(v)!.set(u, 1 / value)

        /* 
            results if use equations = [["a","b"],["b","c"]], values = [2.0,3.0]

            Map(3) {
            'a' => Map(1) { 'b' => 2 },
            'b' => Map(2) { 'a' => 0.5, 'c' => 3 },
            'c' => Map(1) { 'b' => 0.3333333333333333 }
            } graph
        */
    }

    console.log(graph, 'graph'); 

    function dfs(curr: string, target: string, visited: Set<string>): number {
        // 1. Ambil semua tetangga dari 'curr' di Map
        const neighbors = graph.get(curr) || new Map();
        
        // 2. Tandai kota ini sudah dikunjungi
        visited.add(curr);

        for (let [next, value] of neighbors) {
            // Jika ketemu tujuan langsung
            if (curr === target) return 1.0;

            // Jika belum dikunjungi, telusuri lebih dalam
            if (!visited.has(next)) {
                const result = dfs(next, target, visited);
                
                // Jika rute di bawah sana menemukan jawaban (bukan -1)
                if (result !== -1.0) {
                    return value * result; // Kalikan rasionya!
                }
            }
        }

        return -1.0; // Buntu, tidak ada jalan
    }

    const res: number[] = []; 
    
    for(const [start, end] of queries){
        if(!graph.has(start) || !graph.has(end)) res.push(-1.0); 
        else if(start === end) res.push(1.0)
        else {
            const visited = new Set<string>(); 
            res.push(dfs(start, end, visited))
        }
    }
    return res; 
};