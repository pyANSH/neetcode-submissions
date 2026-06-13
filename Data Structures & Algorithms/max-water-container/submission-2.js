class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const len = heights.length;
        let max = 0;
        let i = 0;
        let j = len - 1;

        while (i < len - 1) {
            const area = Math.min(heights[i], heights[j]) * (j - i);
            max = Math.max(area, max);
            if (heights[i] > heights[j]) {
                j--;
            } else {
                i++;
            }
        }
        return max;
    }
}
