/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * time complexity is o(n)
 * space complexity is o(n) it is not optimal solution
 */


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const a = s.split('')
    const b = t.split('')
    const aHasMap = new Map()
    for(var i = 0; i<a.length; i++){
        if(aHasMap.has(a[i])){
            aHasMap.set(a[i],aHasMap.get(a[i])+1)
        }else{
        aHasMap.set(a[i],1)
        }
    }

    for(var i = 0; i<b.length; i++){
        if(aHasMap.has(b[i])){
            aHasMap.set(b[i], aHasMap.get(b[i])-1)
        }else{
            aHasMap.set(b[i], 1)
        }
        if(aHasMap.get(b[i]) === 0) aHasMap.delete(b[i])

    }
    if(aHasMap.size === 0) return true
    return false;
};

// console.log(isAnagram('anagram', 'gramanc'))

module.exports = isAnagram