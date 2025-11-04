/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    if(strs.length === 0) return [];

    const hasMap = new Map();
    
    for(var i=0; i<strs.length; i++){
        const count = Array(26).fill(0)

        for(var j=0; j<strs[i].length; j++){
          const a =  strs[i][j].charCodeAt(0)-'a'.charCodeAt(0)
          count[a] = count[a]+1
        }
        const key = count.join('#')
        
        console.log(key, count.join('#'))
        if(!hasMap.has(key)){
             hasMap.set(key, []);
        }
        hasMap.get(key).push(strs[i])
    }
    return Array.from(hasMap.values())
};

module.exports= groupAnagrams;