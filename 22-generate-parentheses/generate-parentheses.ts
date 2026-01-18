function generateParenthesis(n: number): string[] {
    const res: string[] = []; 

    function backtrack(s: string, open: number, close: number){
        if(s.length === n * 2){
            res.push(s);
            return;
        }

        // console.log(s, res, 'before')

        if(open < n){
            backtrack(s + "(", open + 1, close);
        }

        if(close < open){
            backtrack(s + ")", open, close + 1);
        }

        // console.log(s, res, 'after')
    }

    backtrack("", 0, 0)
    return res;
};