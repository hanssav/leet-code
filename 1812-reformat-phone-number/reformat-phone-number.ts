function reformatNumber(number: string): string {
    let digits = number.replace(/\D/g, '');

    let len = digits.length
    let i = 0;
    const res = []

    while(len - i > 4){
        res.push(digits.slice(i, i + 3)); 
        i += 3;
    }

    let remaining = len - i; 

    if(remaining === 4){
        res.push(digits.slice(i, i + 2)); 
        res.push(digits.slice(i + 2, i + 4)); 
    } else {
        res.push(digits.slice(i)); 
    }

    return res.join("-")
};