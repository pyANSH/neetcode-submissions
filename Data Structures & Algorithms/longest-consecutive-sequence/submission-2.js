class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let high = 0;
        if (!set.size) return 0
        for (let i of set) {
            if (set.has(i - 1)) continue;
            let curr = i;
            let h = 1;
            for (let j of set) {
                if (set.has(curr + 1)) {
                    h++;
                    curr++
                }
            }
            if (h > high) high = h;
        }
        return high
    }
}
