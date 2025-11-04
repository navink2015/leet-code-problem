/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hasMap = new Map();
    for(var i=0; i<nums.length; i++){
            hasMap.set(nums[i], (hasMap.get(nums[i]) || 0) + 1 )
    }
    const array = [...hasMap.entries()].sort((i,j)=>j[1]-i[1]).slice(0,k).map(i=>i[0])
     return array;
};

module.exports = topKFrequent;