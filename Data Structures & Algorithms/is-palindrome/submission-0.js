class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const len = s.length;
        let i = 0;
        let j = len - 1;

        while (i < j) {
            const cl = s[i].charCodeAt();
            const cr = s[j].charCodeAt();

            if (!(cl > 47 && cl < 58) && !(64 < cl && cl < 91) && !(96 < cl && cl < 122)) {
                i++;
                continue;
            }
            if (!(cr > 47 && cr < 58) && !(64 < cr && cr < 91) && !(96 < cr && cr < 122)) {
                j--;
                continue;
            }
            if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
