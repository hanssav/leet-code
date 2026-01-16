function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b); 

    let res: number[][] = [];

    function find(start: number, remain:number, current_arr: number[]){
        if(remain === 0){
            res.push([...current_arr]); 
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // console.log(current_arr)
            if(candidates[i] > remain) break;
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            current_arr.push(candidates[i]);
            find(i + 1, remain - candidates[i], current_arr); 
            current_arr.pop();
        }
    }

    find(0, target, [])

    return res;
};