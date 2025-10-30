const containsNearbyDuplicate = require('./answer')

test('duplicat contains for 3', ()=>{
    expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true)
})

test('duplicat contains for 1', ()=>{
    expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true)
})

test('duplicat contains  for 2', ()=>{
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false)
})