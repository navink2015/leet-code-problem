/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    const hasSet = new Set(nums)
    console.log(hasSet, nums.length)
    if(nums.length === 1 && nums[0] === 0) return 1;
      if(nums.length === 1 && nums[0] === 1) return 2;
    for(var i=1; i<nums.length +2 ; i++){
        console.log(i)
        if(!hasSet.has(i)) return i;
    }
    return 1;
    
};