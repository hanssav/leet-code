function strStr(haystack: string, needle: string): number {
    for(let i = 0; i < haystack.length; i++){
        const split = haystack.substring(i, i + needle.length)

        if(split === needle){
            console.log(split, 'split')
            return i
        }
    }


    return -1
};