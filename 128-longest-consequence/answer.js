/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    const hasSet = new Set(nums);
    let longestSequence = 0;
    for(let num of hasSet){
        if(!hasSet.has(num-1)){
            let currentNum = num;
            let currentSub =1;
            while(hasSet.has(currentNum + 1)){
                currentSub++;
                currentNum++;
            }
            longestSequence = Math.max(longestSequence,currentSub)
        }
    }
    return longestSequence;
};

module.exports = longestConsecutive;