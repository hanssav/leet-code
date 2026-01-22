function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    arr2.sort((a, b) => a - b);

    let count = 0; 

    for(const x of arr1){
        let low = 0; 
        let high = arr2.length - 1; 

        let isSafe = true;

        while(low <= high){
            const mid = Math.floor(low + (high - low) / 2);
            if (Math.abs(x - arr2[mid]) <= d) {
                isSafe = false;
                break; 
            }

            if (arr2[mid] < x) low = mid + 1;
            else high = mid - 1;
        } 

        if (isSafe) count++;
    }

    return count;
};