class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const len1 = s.length;
        const len2 = t.length;

        if (len1 !== len2) return false;

        const char = "a".charCodeAt();
        const arr = new Array(26).fill(0);

        for (let i = 0; i < len1; i++) {
            arr[s[i].charCodeAt() - char]++;
        }
        for (let i = 0; i < len2; i++) {
            arr[t[i].charCodeAt() - char]--;
        }
        return arr.every((i) => i === 0);
    }
}
