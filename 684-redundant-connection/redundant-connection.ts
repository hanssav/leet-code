function findRedundantConnection(edges: number[][]): number[] {
    const parent = Array.from({ length: edges.length + 1 }, (_, i) => i);

    function find(i: number){
        if(parent[i] === i) return i; 
        return parent[i] = find(parent[i])
    }

    function union(i, j){
        const rootI = find(i)
        const rootJ = find(j); 

        if(rootI !== rootJ){
            parent[rootI] = rootJ
            return true; 
        }

        return false
    }

    for(const [u, v] of edges){
        if(!union(u,v)){
            return [u, v]
        }
    }

    return []
};