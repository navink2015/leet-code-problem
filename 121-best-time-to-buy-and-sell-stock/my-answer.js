/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPrice = 0;
    for(let i=0; i<prices.length; i++){
        for(let j=0; j<prices.length; j++){
            if(j>i){
                const currentPrice = prices[j]- prices[i];
                if(maxPrice<currentPrice){
                    maxPrice = currentPrice
                }
            }
            
        }
    }
    return maxPrice;
    
};