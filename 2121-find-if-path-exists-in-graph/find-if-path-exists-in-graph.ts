function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if(source === destination) return true; 
    
    const adj_list = new Map(); 

    for(let [u, v] of edges){
        if (!adj_list.has(u)) adj_list.set(u, []);
        if (!adj_list.has(v)) adj_list.set(v, []);
        adj_list.get(u).push(v);
        adj_list.get(v).push(u);
        // console.log(u, 'u', v, 'v')
        // console.log(adj_list, 'adj_list')
    }

    // console.log(adj_list, 'adj List')
    
    const visited = new Set(); 

    const explore = (curr_node) => {
        if(curr_node === destination) return true; 
        // console.log(curr_node, destination)
        visited.add(curr_node); 

        const neighbors = adj_list.get(curr_node) || [];

        for(let neighbor of neighbors){
            // console.log(neighbor, 'neighboar', visited )
            if(!visited.has(neighbor)){
                if(explore(neighbor)) return true
            }
        }

        return false
    }

    return explore(source) 
};