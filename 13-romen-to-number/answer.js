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

    const doubleSimbleHasMap = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900]

    ])

    let number = 0;
    for(var i=0; i<s.length; i++){
        if(doubleSimbleHasMap.has(s[i]+s[i+1])){
            number = number + doubleSimbleHasMap.get(s[i]+s[i+1])
            i++
        }else if(singleSymbolHasMap.has(s[i])){
            number  = number + singleSymbolHasMap.get(s[i])
        }
    }
    return number
};