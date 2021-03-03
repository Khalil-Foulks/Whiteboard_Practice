    # keep track of when you're holding stock
        
    # figure out when to initially buy
        # find the 2 days with biggest difference
        # sell day must be after buy day
        # can't be currently holding a stock
        
    # figure out when to sell
        # must be holding a stock
        # must result in profit

# ------------------Plan-----------

# find len of prices array
# if len of prices arr < 2 
    # return 0
# set max profit = 0
# set buy = -1 (no stock owned)
# set sell = -1 ( no stock sold)

# loop through prices arr
# check if at last elemnet in array
    # find dif between sell and buy
    # add that to max profit
    # exit loop

# check if next day value > cur day value; this means profit
    # if true update sell to be next day val
    # check if no stock is owned
        # if true update buy to be cur day value
    # else
        # best profit is sell - buy
        # add that to maxProfit
        # reset buy and sell
# reutrn max profit


def maxProfit(self, prices):    
    length = len(prices)
    
    if length < 2:
        return 0
    
    maxProfit = 0
    # no stock has been bought or sold
    buy = -1
    sell = -1
    
    for i in range(0, length):
        if i + 1 == length:
            maxProfit += sell - buy
            continue
            
        # if next val > cur val    
        if prices[i+1] > prices[i]:
            # update sell price
            sell = prices[i+1]
            # if no stock has been bought; update buy price to be cur price
            if buy == -1:
                buy = prices[i]
        else:
            # update max profit
            maxProfit += sell - buy
            # reset sell and buy
            sell = -1
            buy = -1
            
    return maxProfit   