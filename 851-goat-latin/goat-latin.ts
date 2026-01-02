function toGoatLatin(sentence: string): string {
    const vowel = new Set(['a', 'e', 'i', 'o', 'u']); 
    const sufix = "ma"
    let count = 1; 
    
    const strs = sentence.split(" "); 
    let res = ""; 

    strs.forEach((str, idx) => {
        let formated = ""; 
        let use_space = idx === strs.length - 1 ? "" : " "
        const end_sufix = sufix + "a".repeat(count) + use_space; 

        // console.log(str[0], 'str')

        if(vowel.has(str[0].toLowerCase())){
            formated = str
        } else {
            const first = str[0];  
            // console.log(first, 'first', )
            formated = str.slice(1) + first; 
        }

        res += formated + end_sufix
        count++
        // console.log(formated, 'formated')
        // console.log(res, 'res')
    })

    return res
};