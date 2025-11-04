const { jsx } = require("react/jsx-runtime");

const nums = [2,7,11,15], target = 18;

var twoSum=(nums, target)=>{
    const hasSet = new Map();
    for(var i=0; i<nums.length; i++) {
        const reminderValue =  target - nums[i] ;
        // console.log(hasSet, reminderValue)
        if(hasSet.has(reminderValue)){
            return [i, hasSet.get(reminderValue)]
        }
        hasSet.set(nums[i], i)
    }
}

const result = twoSum(nums, target);
// console.log(result);

// time complexity 0(n)
// space complexity o(n)
