/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
// console.log(cost.length) 
    let prev = cost[0]; 
    let next = cost[1]; 

    console.log(cost[0]); 
    console.log(cost[1]); 

    console.log(cost.length, 'length')
    for(let i = 2; i < cost.length; i++ ){
        let total = cost[i] + Math.min(prev, next); 
        prev = next; 
        next = total;
        
        console.log(i, 'index')
        console.log(total, 'total',  prev, 'prev,', next, 'next,' )
    }

    return Math.min(prev, next)
};