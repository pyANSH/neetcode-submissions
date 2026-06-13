class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let max = 0;
        for (let p of prices) {
            min = Math.min(p, min);
            max = Math.max(max, p - min);
        }
        return max
    }
}
