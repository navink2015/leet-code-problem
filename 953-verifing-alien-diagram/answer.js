/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const hasMap = new Map();
    for(var i=0; i< order.length; i++){
        hasMap.set(order[i], i)
    }
    for(let i=0; i<words.length -1; i++){
        for(let j=0; j<words[i].length ; j++){
            if(j >= words[i+1]?.length){
                 return false;
            }
            if(words[i]?.charAt(j) !== words[i+1]?.charAt(j)){
                const current = hasMap.get(words[i].charAt(j))
                const next = hasMap.get(words[i+1]?.charAt(j))
                if(next < current) {
                    return false;
                }else{
                 break;
                }

            }
        }
    }
    return true;  
};

module.exports = isAlienSorted;