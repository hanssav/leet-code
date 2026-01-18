function canBeValid(s: string, locked: string): boolean {
    const n = s.length;
    if (n % 2 !== 0) return false;

    let balanceForward = 0; // Untuk scan kiri -> kanan
    let balanceBackward = 0; // Untuk scan kanan -> kiri

    for (let i = 0; i < n; i++) {
        // Pointer Maju (dari kiri)
        if (locked[i] === "0" || s[i] === "(") balanceForward++;
        else balanceForward--;

        // Pointer Mundur (dari kanan)
        // Indeks mundur adalah n - 1 - i
        let j = n - 1 - i;
        if (locked[j] === "0" || s[j] === ")") balanceBackward++;
        else balanceBackward--;

        // Jika salah satu balance negatif di titik mana pun, langsung gagal
        if (balanceForward < 0 || balanceBackward < 0) return false;
    }

    return true;
}

// function canBeValid(s: string, locked: string): boolean {
//     const n = s.length;
//     if (n % 2 !== 0) return false;

//     let left = 0; 
//     let right = n - 1;

//     let balance = 0;
//     while(left < s.length){
//         if(locked[left] === "0" || s[left] === "(") balance++;
//         else balance--; 

//         if(balance < 0) return false;
//         left++;
//     }

//     balance = 0;
//     while(right >= 0){
//         if(locked[right] === "0" || s[right] === ")") balance++; 
//         else balance--;

//         if(balance < 0) return false;
//         right--;
//     }

//     return true
// };