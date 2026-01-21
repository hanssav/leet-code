function findKthPositive(arr: number[], k: number): number {
    let count = 0; 
    let idx = 0;
    let curr = 0;

    for(let i = 1; k > count; i++){
        if(arr[idx] !== i) count++;
        else if(arr[idx] === i) idx++;

        curr = i;
    }

    return curr;
};