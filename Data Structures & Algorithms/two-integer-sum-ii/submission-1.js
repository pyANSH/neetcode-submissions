class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();

        for (let i in numbers) {
            const t = target - numbers[i];

            if (map.has(t)) {
                return [+i + 1, +map.get(t) + 1].sort((a, b) => a - b);
            }
            map.set(numbers[i], +i);
        }
    }
}
