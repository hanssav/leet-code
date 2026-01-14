function minReorder(n: number, connections: number[][]): number {
    const adj = Array.from({length: n}, () => []); 

    for(let [u, v] of connections){
        // u -> v (arah asli) 1
        adj[u].push([v, 1])
        // v -> u (arah buatan) 0
        adj[v].push([u, 0]); 
    }

    // console.log(adj, 'ad')

    let count = 0;
    let visited = Array.from({length: n}, () => false); 
    const stack = [0]; 
    visited[0] = true; 

    while(stack.length > 0){
        const curr = stack.pop();

        for(let [neighbor, cost] of adj[curr]){
            if(!visited[neighbor]){
                count += cost; 
                visited[neighbor] = true; 
                stack.push(neighbor);
            }
        }
    }

    return count;
};