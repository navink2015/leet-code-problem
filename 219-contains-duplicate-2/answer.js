const nums = [1,4,2,3,1,2,3], k = 2;

function containsNearbyDuplicate(nums, k){
    const hasMap = new Set();
    for(var i = 0; i< nums.length; i++){
        console.log(hasMap)
        // console.log({hasMap:hasMap, size:hasMap.size, value:k-i})
        if(hasMap.has(nums[i])) {
            // console.log("key exist",hasMap, nums[i])
            return true;
        }
        hasMap.add(nums[i])
        if(hasMap.size > k){
            console.log("inside has map size", nums[i-k], i-k)
            hasMap.delete(nums[i-k])
        }
    }
    return false;
}

const result = containsNearbyDuplicate(nums, k)
console.log(result)
