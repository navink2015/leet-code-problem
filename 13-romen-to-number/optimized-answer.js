/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const singleSymbolHasMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]
    )
    let total = 0;
    for(i=0; i<s.length; i++){
        console.log('---------------------------')
        const curr = singleSymbolHasMap.get(s[i])
        const next = singleSymbolHasMap.get(s[i+1]) || 0;
        console.log({curr, next})
        if(curr<next){
            console.log('curr less than next')
            total = total - curr
            console.log({total, curr, symbol: s[i], nextSymbol: s[i+1] })
        } else{
            console.log('curr grater next')
            total = total + curr
            console.log({total, curr, symbol: s[i]})
        }
    }
    console.log(total)
};

romanToInt("MCMXCIV");