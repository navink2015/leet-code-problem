217. Contains Duplicate
Solved
Easy
Topics

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

Algorithm
1) create has set
2) iterate nums array
3) check whether the hasSet has nums current iteration value
4) if exist return true
5) else add  this nums current iterated value to has set
6) return false after iteration. Since all iteration is finished there will be no match found.