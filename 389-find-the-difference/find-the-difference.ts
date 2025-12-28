function findTheDifference(s: string, t: string): string {
    const s_map = new Map(); 
    let res = ''; 

    for(let str of s) {
        if(!s_map.has(str)) s_map.set(str, 0)
        
        s_map.set(str, s_map.get(str) + 1)
    } 

    for(let tr of t){
        if(!s_map.has(tr)) res += tr;  

        if(s_map.has(tr)) s_map.set(tr, s_map.get(tr) - 1)
        if(s_map.get(tr) === 0) s_map.delete(tr)
    }

    return res
};