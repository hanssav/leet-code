function networkDelayTime(times: number[][], n: number, k: number): number {
    const adj_list = new Map(); 

    for(let [src, target, time] of times){
        if(!adj_list.has(src)) adj_list.set(src, [])

        adj_list.get(src).push([target, time])
    }

    const queue = [ k ]; 
    const min_times = new Array(n + 1).fill(Infinity); 
    min_times[k] = 0;

    while(queue.length > 0){
        const curr = queue.shift(); 

        if(adj_list.has(curr)){
            for(let [target, travel_time] of adj_list.get(curr)!){
                const new_time = min_times[curr] + travel_time; 
                
                if(new_time < min_times[target]) {
                    min_times[target] = new_time; 
                    queue.push(target) 
                }
            }
        } 
    }
    
    let max_delay = 0; 

    for(let i = 1; i <= n; i++){
        if(min_times[i] === Infinity) return -1; 

        max_delay = Math.max(max_delay, min_times[i]); 
    }
    
    return max_delay; 
};