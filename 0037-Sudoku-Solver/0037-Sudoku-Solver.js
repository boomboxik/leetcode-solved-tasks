function solveSudoku(board) {
    const solve = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const charNum = num.toString();
                        if (isValid(board, row, col, charNum)) {
                            board[row][col] = charNum;
                            if (solve()) {
                                return true;
                            }
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    const isValid = (board, row, col, char) => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === char || board[i][col] === char || 
                board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === char) {
                return false;
            }
        }
        return true;
    };

    solve();
}