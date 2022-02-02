var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    
    for(let i = 1; i < prices.length; i++) { 
        // if cur price is < min; min becomes cur price
        if(min > prices[i]) {
            min = prices[i];
        } 
        // update profit to be highest value
        else if(prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    
    return profit;
};

/* 
  time complexity O(n) :
  space complexity O(1) : 
*/