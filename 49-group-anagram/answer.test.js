const groupAnagrams = require('./answer')

test('group anagram test 1', ()=>{
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"].sort())).toEqual([["bat"],["nat","tan"],["ate","eat","tea"]].sort())
})

// test('duplicate contains for 1', ()=>{
//     expect(groupAnagrams([1,0,1,1], 1)).toBe(true)
// })

// test('duplicate contains  for 2', ()=>{
//     expect(groupAnagrams([1,2,3,1,2,3], 2)).toBe(false)
// })