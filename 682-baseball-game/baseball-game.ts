function calPoints(operations: string[]): number {
    const arr: number[] = []

    for(let opt of operations){
        const arr_len: number = arr.length; 
        // console.log(opt, 'opt', typeof opt)
        if(opt === "C"){
            arr.pop()
            console.log(arr, "arr pop")
        } else if(opt === "D"){
            console.log(arr, "arr D", arr[arr_len -1], arr.length)
            arr.push(arr[arr_len - 1] * 2); 
        } else if(opt === "+"){
            const sum = arr[arr_len - 1] + arr[arr_len - 2] 
            arr.push(sum)
        } else {
            arr.push(Number(opt))
            console.log(opt, 'opt')
            console.log(arr, 'arr')
        }
    }


    return arr.reduce((acc, curr) => acc + curr, 0)
};  