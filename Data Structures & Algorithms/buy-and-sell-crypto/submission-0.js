class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let i = 0;
        let j = 1;
        const len = prices.length;
        while (i < len - 1) {
            const p = prices[j] - prices[i];
            max = Math.max(p, max);

            if (j < len - 1) {
                j++;
            } else {
                i++;
                j = i + 1;
            }
        }
        return max
    }
}
