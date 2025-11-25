/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
   const arrayList = Array(26).fill(0);
   let left = 0;
   let maxOccurance =0;
   let ans = 0;
   console.log("stirng", s)
   for(let right=0; right<s.length; right++){
    console.log({ left, right, string: arrayList.join('|')})
    const index = s.charCodeAt(right) - 'A'.charCodeAt(0);
    arrayList[index]++;
    maxOccurance = Math.max(maxOccurance, arrayList[index]) // compare maxoccurance and corrent right index count and update the max occurance
    if((right - left -maxOccurance + 1 )> k){ // Create sliding window with length right index, left index , max occurnace and k  
    const leftIndex = s.charCodeAt(left) - 'A'.charCodeAt(0); // get left index
    arrayList[leftIndex]--; // decrement by left index in arraylist
    left++; // increase the left index for sliding window
    }
    ans = Math.max(ans, (right - left + 1))
   }

   return ans;
};

console.log("result", characterReplacement('AXQXBCSWKJBJIYXA', 2))

