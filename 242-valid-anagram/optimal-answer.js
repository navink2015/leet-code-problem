/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * time complexity is o(n)
 * space complexity is o(1) it is not optimal solution
 */


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const charArray = new Array(26).fill(0)
    for(var i=0; i<s.length; i++){
        charArray[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        charArray[t.charCodeAt(i)-'a'.charCodeAt(0)]--;

    }
    for (const count of charArray){
        if(charArray[count] !== 0) return false
    }
    return true;
};


module.exports = isAnagram