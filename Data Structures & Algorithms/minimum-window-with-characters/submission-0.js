class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const m1 = new Map();
        for (let i of t) {
            m1.set(i, (m1.get(i) || 0) + 1);
        }

        let required = m1.size;
        let have = 0;
        let left = 0;
        let ans = [-1, 0, 0];
        let m2 = new Map();
        let right = 0;

        if (t.length > s.length) return "";

        while (right < s.length) {
            const current = s[right];
            m2.set(current, (m2.get(current) || 0) + 1);

            if (m1.has(current) && m1.get(current) === m2.get(current)) {
                have++;
            }

            if (have === required) {
         
                while (left <= right && have === required) {

                    if (ans[0] === -1 || right - left + 1 < ans[0]) {
                        ans = [right - left + 1, left, right];
                    }
                    const leftCurrent = s[left];
                    m2.set(leftCurrent, m2.get(leftCurrent) - 1);
                    // if (m2.get(leftCurrent) <= 0) {
                    //     m2.delete(leftCurrent);
                    // }
                    if (m1.has(leftCurrent) && m1.get(leftCurrent) > m2.get(leftCurrent)) {
                        have--;
                    }
                    left++;
                }
            }
            right++;
        }
        return ans[0] === -1 ? '' : s.slice(ans[1], ans[2] + 1);
    }
}