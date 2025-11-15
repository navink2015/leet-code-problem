// flattenArray

const a = [1,2,[3,4,[5,6,[7]]]]

const flatenArray = (item)=>{
    let resultArray = []
    for(var i=0; i<item.length; i++){
        console.log('iteration',item[i])
    if(Array.isArray(item[i])){
        // resultArray.push()
         resultArray = resultArray.concat(flatenArray(item[i]))
    }else{
        resultArray = resultArray.concat(item[i])
    }
    // console.log('result at every itt',resultArray)

}
return resultArray
    console.log(resultArray)
}

// console.log("flatenArray:",flatenArray(a))

function reducerMethod(arr){
    return arr.reduce((accum,cur)=>{
        console.log("acc->",accum, cur)
        if(Array.isArray(cur)){
            return accum.concat( reducerMethod(cur))
        }else{
        return accum.concat(cur)
    }

    }, [])
}
// console.log(reducerMethod(a))

function flattenPlusPush(arr, result=[]){
    for (const a of arr){
    console.log(a)
        if(Array.isArray(a)){
            flattenPlusPush(a, result)
        }else{
            result.push(a)
        }
    }
    return result
}

// console.log("flattenPlusPush",flattenPlusPush(a, []))


const original = {
    name: 'Alice',
    details: {
        id: 101,
        scores: [90, 85] // This is the nested array
    }
};

// Shallow Copy
const shallowCopy = { ...original }; 

// --- Test 1: Changing a TOP-LEVEL property ---
shallowCopy.name = 'Bob'; 
console.log('Original Name:', original.name, shallowCopy.name); // Output: Alice (Top level is independent)

// --- Test 2: Changing a NESTED property ---
shallowCopy.details.scores[0] = 50; // Changing the array inside 'details'
console.log('Original Scores:', original.details.scores);