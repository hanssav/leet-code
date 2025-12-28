/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString(); 
    const strLength = str.length

    if(!x || strLength === 1) return true
    console.log(Math.floor(strLength/2), 'normalize')

    for(let i = 0; i < Math.floor(strLength/2); i++){
        console.log(str[i], 'str i')
        console.log(str[str.length - i -1], 'last str')
        if(str[i] !== str[str.length - i - 1]) {
            return false
        }
    }     
    // for(let i = 0; i < )
    return true 
};