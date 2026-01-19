function judgeCircle(moves: string): boolean {
    const nav = {
        "U": [-1, 0], 
        "D": [1, 0], 
        "R": [0, 1], 
        "L": [0, -1],
    }  

    let curr = [0, 0];

    for(let move of moves){
        curr[0] += nav[move][0]
        curr[1] += nav[move][1]

        console.log(curr, 'curr')
    }

    return curr[0] === 0 && curr[1] === 0 ? true : false;
};