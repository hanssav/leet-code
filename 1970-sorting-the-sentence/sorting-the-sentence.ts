function sortSentence(s: string): string {
    const word = s.split(" ").sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]) ); 

    return word.join(" ").replace(/\d/g, "");
};