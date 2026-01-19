function checkRecord(s: string): boolean {
    let m = new Map();

    let count_consec = 0; 

    for(const str of s){
        m.set(str, (m.get(str) || 0) + 1); 


        if(str === "L"){
            count_consec++;
        } else if(count_consec > 0 && str !== "L") count_consec = 0;

        // console.log(count_consec, m)
        if(
            str === "A" && m.get(str) > 1 ||
            str === "L" && count_consec > 2
        ) return false; 
        // if(str === "L" && m.get(str) > 2) return false;
    }

    console.log(m, 'm')
    return true;
};