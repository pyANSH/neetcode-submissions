class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const t = target - nums[i] ; // -4

            if (map.has(t)) { // f
                return [i, map.get(t)];
            }
            map.set(nums[i], i); // -4 : 0
        }
    }
}
