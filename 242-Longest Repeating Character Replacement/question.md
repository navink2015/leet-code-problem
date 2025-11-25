424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length


steps
1) create array list with lenght of s
2) Initalize variable for left index, max occurance and answer result
3) Itterate the s by length and take itterating index has right index
4) update occurance in array list using right index
5) compare max occurance and corrent right index count and update the max occurance
6) Create sliding window with length right index, left index , max occurnace and k  
7) Get left index in sliding window
8) decrement by left index in arraylist
9) increase the left index for sliding window
10) After sliding window now set answer has window lenght max
11) After for loop return the result