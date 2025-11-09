function stringToloop (params, value){
    console.log("params", params)
    const paramsArray = params.split('.');
    const finalObject = {};
    let currentObject = finalObject;
    for(var i=0; i< paramsArray.length-1; i++){
        const currentKey = paramsArray[i];
        console.log(currentKey)
        if(!currentObject[currentKey]){
            currentObject[currentKey]={}
        }
        currentObject= currentObject[currentKey];
        console.log("currentObject", {currentObject, currentKey})
        
    }
        // Assign the final VALUE to the very last key
    // const lastKey = paramsArray[paramsArray.length - 1];
    // currentObject[lastKey] = value; // 2. Assign the actual value

    console.log("finalObject-->", finalObject);
    return finalObject; // 3. Return the built object

}

// Example 1: Basic usage
const path1 = "user.profile.name.first";
const result1 = stringToloop(path1, "John");
console.log(JSON.stringify(result1, null, 2));