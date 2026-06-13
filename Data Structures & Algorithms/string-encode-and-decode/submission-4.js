class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (let s of strs) {
            str = str + s.length + "#" + s;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // 1. Read the length digits until we hit '#'
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = parseInt(str.slice(i, j));

            // 2. The string starts right after '#'
            const start = j + 1;
            const end = start + length;
            result.push(str.slice(start, end));

            // 3. Jump to the next encoded chunk
            i = end;
        }

        return result;
    }
}
