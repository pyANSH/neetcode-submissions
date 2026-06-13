class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const len = heights.length;
        let max = 0;
        let i = 0;
        let j = 1;

        while (i < len - 1) {
            const area = Math.min(heights[i], heights[j]) * (j - i);
            max = Math.max(area, max);
            if (j < len - 1) {
                j++;
            } else {
                i++;
                j = i + 1;
            }
        }
        return max;
    }
}
