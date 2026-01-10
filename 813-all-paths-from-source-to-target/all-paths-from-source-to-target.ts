function allPathsSourceTarget(graph: number[][]): number[][] {
    const paths: number[][] = []

    // const stack = [0]

    let path = [0]

    function dfs(curr: number, path: number[]){
        if(curr === graph.length - 1){
            paths.push([...path]); 
            return
        }

        for(const neighbor of graph[curr] ){
            path.push(neighbor)
            dfs(neighbor, path); 
            path.pop()
        }
    }

    dfs(0, path)

    return paths
};