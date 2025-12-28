// function plusOne(digits: number[]): number[] {
//     let temp = ''
//     for(let i = 0; i < digits.length; i++){
//         temp += String(digits[i])
//     }

//     let t: number | bigint;
//     console.log(temp, 'temp'); 
//     if (Number(temp) < Number.MAX_SAFE_INTEGER) {
//       t = Number(temp) + 1;
//     } else {
//       t = BigInt(Number(temp)) + 1n;
//     }

//     console.log(t, 't')
//     const a = String(t)
    
//     console.log(a, 'a'); 

//     let rs = []
//     for(let i = 0; i < a.length; i++){
//         rs.push(Number(a[i]))
//     }

//     console.log(rs, 'rs')
//     return rs
// };

// function plusOne(digits: number[]): number[] {
//     const n = digits.length;
//     const result = [...digits]; // salin array agar tidak mutasi input

//     for (let i = n - 1; i >= 0; i--) {
//         if (result[i] < 9) {
//             result[i] += 1;
//             return result; // langsung return karena tidak ada carry
//         }
//         result[i] = 0; // jika 9, jadi 0 dan carry ke kiri
//     }

//     // jika semua digit 9 → hasilnya 1000...0
//     return [1, ...result];
// }


function plusOne(digits: number[]): number[] {
    const len = digits.length

    for(let i = len-1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i] = digits[i] + 1
            return digits
        }
        // selain < 9 adalah 9 
        // so this is 9 and will be 0 when added 1

        digits[i] = 0;
    }

    const last_res: number[] = new Array(len+1).fill(0)
    last_res[0] = 1; 

    return last_res
}


