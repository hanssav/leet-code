function reorderSpaces(text: string): string {
    let spaces = 0; 

    for(let t of text){
        if(t === " ") spaces++
        // else strings.push(t)
    }

    // convert text without space;
    const words = text.trim().split(/\s+/); 
    const num_words = words.length

    // count gaps
    const gaps = num_words > 1 ? Math.floor(spaces / (num_words - 1)) : 0; 
    const remainder = num_words > 1 ? spaces % (num_words - 1) : spaces; 

    const middle_space = " ".repeat(gaps); 
    const end_space = " ".repeat(remainder); 

    return words.join(middle_space) + end_space
};