function areNumbersAscending(s: string): boolean {
    let words = s.split(" "); 
    let prev = 0; // number from 0 - 9

    for(let i = 0; i < words.length; i++){
        let num = Number(words[i]); 

        if(!Number.isFinite(num)) continue; 
        else if (Number.isFinite(num)){
            if(num <= prev) return false;

            prev = num;
        }
    }

    return true;
};