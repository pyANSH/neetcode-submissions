class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;

        let ans = 0;
        let arr = new Array(26).fill(0);
        let maxOccurance = 0;
        const subs = "A".charCodeAt();
        for (let right = 0; right < s.length; right++) {
            maxOccurance = Math.max(maxOccurance, ++arr[s[right].charCodeAt() - subs]);

            if (right - left + 1 - maxOccurance > k) {
                arr[s[left].charCodeAt() - subs]--;
                left++;
            }
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }
}
