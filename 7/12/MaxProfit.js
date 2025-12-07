// My version
var maxProfit = function(prices) {
    let minValue = prices[0]
    let profit = 0
    for (let i=1; i < prices.length; i++){
        if (prices[i] < minValue){
            minValue = prices[i]
            continue
        }
        profit = Math.max(profit, prices[i] - minValue)
    }
    return profit
};

//ChatGPT version
var maxProfit = function(prices) {
    let minValue = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i];   // 更新最低買入價
        } else {
            profit = Math.max(profit, prices[i] - minValue);
        }
    }

    return profit;
};
