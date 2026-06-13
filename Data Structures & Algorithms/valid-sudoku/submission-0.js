class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === ".") continue;

                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // CHECK before inserting
                if (rows[r].has(val) || cols[c].has(val) || boxes[b].has(val)) {
                    return false;
                }

                // then record it
                rows[r].add(val);
                cols[c].add(val);
                boxes[b].add(val);
            }
        }
        return true;
    }
}
