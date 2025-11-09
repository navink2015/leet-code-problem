const arrayNumber1 = [1,2,[3,4,[5,6],7],8,9]

const flattenNestedArray = (arrayNumber)=>{
    return arrayNumber.reduce((accum, current)=>{
        if(Array.isArray(current)){
            return accum.concat(flattenNestedArray(current))
        }else return accum.concat(current)
    }, [])    

}

const flatNested = (arr)=>{
    return arr.reduce((accum, current)=>{
        if(Array.isArray(current)){
            return accum.concat(flatNested(current))
        }else return accum.concat(current)
    }, [])
}
console.log("result:",flatNested(arrayNumber1))

const returnData = flattenNestedArray(
    arrayNumber1
)

console.log("returnData",returnData)