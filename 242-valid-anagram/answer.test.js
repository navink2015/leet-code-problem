const isAnagram = require('./answer')
const isOptimalAnagram = require('./optimal-answer')

test('check anagram', ()=>{
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
})

test('check anagram', ()=>{
    expect(isAnagram('rat', 'car')).toBe(false)
})

test('check optimal anagram', ()=>{
    expect(isOptimalAnagram('anagram', 'nagaram')).toBe(true)
})

test('check anagram', ()=>{
    expect(isOptimalAnagram('rat', 'car')).toBe(false)
})