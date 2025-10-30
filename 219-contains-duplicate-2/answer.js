const nums = [1,4,2,3,1,2,3], k = 2;

function containsNearbyDuplicate(nums, k){
    const hasMap = new Set();
    for(var i = 0; i< nums.length; i++){
        if(hasMap.has(nums[i])) {
            return true;
        }
        hasMap.add(nums[i])
        if(hasMap.size > k){
            hasMap.delete(nums[i-k])
        }
    }
    return false;
}

module.exports= containsNearbyDuplicate