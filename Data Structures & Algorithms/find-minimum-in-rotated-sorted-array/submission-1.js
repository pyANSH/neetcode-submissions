class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0;
        let j = nums.length - 1;
        let min = Infinity;
        let minIndex = -1;
        while (i <= j) {
            if (nums[i] < min) {
                min = nums[i];
                minIndex = i;
            }
            if (nums[j] < min) {
                min = nums[j];
                minIndex = j;
            }
            i++;
            j--;
        }
        return min;
    }
}
