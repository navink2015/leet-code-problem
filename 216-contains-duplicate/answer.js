const  nums = [1,2,3,1];

const containsDuplicate=(nums)=>{
    const hasSet = new Set();
    for(const num in nums){
        if(hasSet.has(nums[num])){
            return true
        }
        hasSet.add(nums[num])
    }
    return false;

}

const result = containsDuplicate(nums);
console.log('result', result)