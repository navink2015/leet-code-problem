var productExceptSelf = function(nums) {
    const answer = new Array(nums.length).fill(1);
    let prefix=1, postfix=1;
    for(var i=0; i<nums.length; i++){
        answer[i]=prefix;
        prefix=prefix*nums[i];
    }
    // console.log(answer)

    for(var j=nums.length-1; j>=0; j--){
        answer[j]=answer[j]*postfix;
        postfix=nums[j]*postfix
    }
    // console.log(answer)
    return answer.map(x => Object.is(x, -0) ? 0 : x); // this code is for test validation need to return answer 
}

productExceptSelf([-1,1,0,-3,3])
module.exports=productExceptSelf;



