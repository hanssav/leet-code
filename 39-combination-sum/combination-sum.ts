function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = []; 
    candidates.sort((a, b) => a - b);

    function backtracking(start: number, remain: number, curr: number[]){
        if(remain === 0){
            res.push([...curr]); 
            return; 
        }
        // console.log(curr, 'res')

        for(let i = start; i < candidates[i]; i++){
            if(candidates[i] > remain) break; 

            curr.push(candidates[i]); 
            backtracking(i, remain - candidates[i], curr); 
            curr.pop() 
        }
    }

    backtracking(0, target, [])
    return res;
};