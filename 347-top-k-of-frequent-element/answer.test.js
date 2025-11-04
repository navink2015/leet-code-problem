const topKFrequent = require('./answer')

test('top frequent test', ()=>{
    expect(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2)).toEqual([1,2])
})