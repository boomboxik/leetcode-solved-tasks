function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, index) {

        if (index === word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) return false;

        const temp = board[r][c];
        board[r][c] = '#';

        const found = dfs(r - 1, c, index + 1) ||
                      dfs(r + 1, c, index + 1) ||
                      dfs(r, c - 1, index + 1) ||
                      dfs(r, c + 1, index + 1);

        board[r][c] = temp;

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}