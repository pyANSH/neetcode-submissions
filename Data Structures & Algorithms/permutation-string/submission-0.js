class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;
        const arr1 = new Array(26).fill(0);
        const arr2 = new Array(26).fill(0);
        const subs = "a".charCodeAt();
        for (let i in s1) {
            arr1[s1[i].charCodeAt() - subs]++;
            arr2[s2[i].charCodeAt() - subs]++;
        }

        let left = 0;
        let right = s1.length - 1;

        const isValid = () => {
            for (let a = 0; a < 26; a++) {
                if (arr1[a] !== arr2[a]) {
                    return false;
                }
            }
            return true;
        };
        while (right < s2.length) {
            if (isValid()) {
                return true;
            }
            arr2[s2[left].charCodeAt() - subs]--;
            right++;
            left++;
            if (right < s2.length) {
                arr2[s2[right].charCodeAt() - subs]++;
            }
        }
        return false;
    }
}
