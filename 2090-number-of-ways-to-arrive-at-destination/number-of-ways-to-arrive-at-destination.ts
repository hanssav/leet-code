// function countPaths(n: number, roads: number[][]): number {
//     const m = new Map(); 

//     for(let road of roads){
//         if(!m.has(road[0])) m.set(road[0], []); 
//         if(!m.has(road[1])) m.set(road[1], []); 

//         m.get(road[0]).push([road[1], road[2]])
//         m.get(road[1]).push([road[0], road[2]])
//     }

//     // console.log(m, 'n')
//     const times: number[] = [];
//     let min = Infinity;

//     function backtrack(curr: number, time: number, visited: boolean[]){
//         if(time > min) return;
//         if(curr === n - 1){
//             times.push(time)

//             if(min > time) min = time
//             return
//         }

//         const neighbors = m.get(curr) || [];
//         // console.log(times, time, curr, neighbors)

//         for(const neighbor of neighbors){
            
//             // console.log(neighbor[0], visited[neighbor[0]])
//             if(!visited[neighbor[0]]){
//                 time += neighbor[1];
//                 visited[neighbor[0]] = true;
//                 backtrack(neighbor[0], time, visited);

//                 visited[neighbor[0]] = false;
//                 time -= neighbor[1];
//             }
//         }
//     }

//     let visited = Array(n).fill(false)
    
//     backtrack(0, 0, visited)
    
//     // console.log(times, 'times')

//     let count = 0; 
    
//     for(const t of times){
//         if(t === min) count++;
//     }

//     return count
// };

function countPaths(n: number, roads: number[][]): number {
    const MOD = 1e9 + 7;
    const graph = new Map<number, [number, number][]>();
    
    // Build adjacency list
    for (let [u, v, time] of roads) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u)!.push([v, time]);
        graph.get(v)!.push([u, time]);
    }
    
    // Dijkstra with path counting
    const dist = Array(n).fill(Infinity);
    const ways = Array(n).fill(0);
    const pq: [number, number][] = [[0, 0]]; // [distance, node]
    
    dist[0] = 0;
    ways[0] = 1;
    
    while (pq.length > 0) {
        // Get min distance (simple sort, bisa dioptimasi dengan priority queue)
        pq.sort((a, b) => a[0] - b[0]);
        const [d, u] = pq.shift()!;
        
        if (d > dist[u]) continue;
        
        const neighbors = graph.get(u) || [];
        for (let [v, time] of neighbors) {
            const newDist = dist[u] + time;
            
            if (newDist < dist[v]) {
                // Found shorter path
                dist[v] = newDist;
                ways[v] = ways[u];
                pq.push([newDist, v]);
            } else if (newDist === dist[v]) {
                // Found another shortest path
                ways[v] = (ways[v] + ways[u]) % MOD;
            }
        }
    }
    
    return ways[n - 1];
}