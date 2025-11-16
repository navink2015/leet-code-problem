Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.


Step-by-step algorithm (with mapping to code):

1.Early length check

Code: if(s1.length > s2.length) false;
Purpose: If s1 is longer than s2 no permutation of s1 can fit in s2.
Note: This line has a bug — it should return false. Otherwise the function continues and may produce incorrect results or undefined behavior.

2.Create frequency arrays

Code:
const hasMapS1 = new Array(26).fill(0);
const hasMapS2 = new Array(26).fill(0);
Purpose: Track counts for letters 'a'..'z' for s1 and the current window of s2.

3.Initialize counts for s1 and the first window of s2

Code:
for (let i = 0; i < s1.length; i++) { ... }
What it does: For i from 0 to s1.length - 1:
increment hasMapS1[indexOf(s1[i])]
increment hasMapS2[indexOf(s2[i])]
indexOf is computed as s[i].charCodeAt(0) - 'a'.charCodeAt(0) to map letters to 0..25.

4.Sliding-window loop across s2

Code:
for(let i = 0; i < s2.length - s1.length; i++) { ... }
Purpose: Move the window of size s1.length along s2.
Each iteration:
Check for match with checkMatch(hasMapS1, hasMapS2). If true, return true immediately.
Otherwise, update the window counts:
Decrement the count of leaving char s2[i]
Increment the count of entering char s2[i + s1.length]

5.Final window check and return

After the loop, the last window hasn't been checked inside the loop (loop uses strict <), so the code calls:
return checkMatch(hasMapS1, hasMapS2);
This returns true if the final window is a permutation, false otherwise.

6.checkMatch helper

Code:
for(let i = 0; i<26; i++){ if(hasMapS1[i] !== hasMapS2[i]) return false; } return true;
Purpose: Compare two frequency arrays element-wise; returns true when all counts match.

Complexity:

Time: O(m + (n-m)*26) where m = s1.length and n = s2.length. Since 26 is constant, complexity is O(n).
Space: O(1) extra space (two arrays of size 26).
