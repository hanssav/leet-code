function twoSum(numbers: number[], target: number): number[] {
    const n = numbers.length;

    for(let i = 0; i < n; i++){
        const need = target - numbers[i]; 

        let left = i + 1; 
        let right = n - 1; 

        while(right >= left){
            const mid = Math.floor((left + right) / 2); 

            if(numbers[mid] === need) return [i + 1, mid + 1]; 
            else if(numbers[mid] > need){
                right = mid - 1; 
            } else left = mid + 1;
        }
    }

    return [];
};