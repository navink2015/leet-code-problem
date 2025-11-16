/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    const hasMapS1 = new Array(26).fill(0);
    const hasMapS2 = new Array(26).fill(0);

    for(let i=0; i< s1.length; i++){
        hasMapS1[s1[i].charCodeAt(0) -'a'.charCodeAt(0)] = hasMapS1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] + 1;
        hasMapS2[s2[i].charCodeAt(0) -'a'.charCodeAt(0)] = hasMapS2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] + 1;
    }

    for(let i=0; i< s2.length - s1.length; i++){
        if(checkMatch(hasMapS1, hasMapS2)){
            return true;
        }else{
            hasMapS2[s2[i].charCodeAt(0) -'a'.charCodeAt(0)] = hasMapS2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] - 1;
            hasMapS2[s2[i + s1.length].charCodeAt(0)- 'a'.charCodeAt(0)] = hasMapS2[s2[i + s1.length].charCodeAt(0)- 'a'.charCodeAt(0)] + 1;
        }
    }
    return checkMatch(hasMapS1, hasMapS2);

};

const checkMatch = (hasMapS1, hasMapS2) => {
    for(let i=0; i<26; i++){
        if(hasMapS1[i] !== hasMapS2[i]) return false;
    }
    return true;
}


console.log("result",checkInclusion("ab", "eidbaooo"))

