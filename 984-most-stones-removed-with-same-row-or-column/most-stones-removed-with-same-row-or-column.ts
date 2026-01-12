function removeStones(stones: number[][]): number {
    const offset = 10001; 
    const adj = new Map(); 
    const visited = new Set();

    for(const [r, c] of stones){
        const row_nodes = r; 
        const col_nodes = c + offset; 

        if(!adj.has(row_nodes)) adj.set(row_nodes, [])
        if(!adj.has(col_nodes)) adj.set(col_nodes, [])

        adj.get(row_nodes).push(col_nodes); 
        adj.get(col_nodes).push(row_nodes);
    }
    
    function dfs(node){
        visited.add(node); 
        const neighbors = adj.get(node); 
        if (neighbors) {
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }
    }

    let num_components = 0;

    for(let [r, c] of stones){
        if(!visited.has(r)){
            dfs(r); 
            num_components++
        }
    } 
    
    return stones.length - num_components;
};