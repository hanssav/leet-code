function loudAndRich(richer: number[][], quiet: number[]): number[] {
    // return person that is more quiet(smallest value quiet) and have money >= than person[i] 
    const n = quiet.length;
    // Inisialisasi array kosong untuk setiap orang
    const adj: number[][] = Array.from({ length: n }, () => []); 

    for (let [a, b] of richer) {
        // b adalah orang yang lebih miskin, a lebih kaya
        adj[b].push(a); 
    }

    // Sekarang adj[i] selalu menghasilkan array (minimal array kosong [])
    // console.log(adj);

    const res: number[]  = Array(n).fill(0);
    const memo = Array(n).fill(-1);

    // console.log(memo, adj, 'memo')

    function dfs(node: number){
        if(memo[node] !== -1) return memo[node]
    
        memo[node] = node; 

        for(let neighbor of adj[node]){
            let find_quiet = dfs(neighbor); 

            if(quiet[find_quiet] < quiet[memo[node]]) memo[node] = find_quiet;
        }

        return memo[node]
    }
    
    for(let i = 0; i < n; i++){
       res[i] = dfs(i)
    }

    return res
};