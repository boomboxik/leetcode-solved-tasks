function totalNQueens(n) {
    let result = 0;

    function backtrack(row, columns, diagonals1, diagonals2) {
        if (row === n) {
            result++;
            return;
        }

        for (let col = 0; col < n; col++) {
            let diag1 = row - col;
            let diag2 = row + col;

            if (columns.has(col) || diagonals1.has(diag1) || diagonals2.has(diag2)) {
                continue;
            }

            columns.add(col);
            diagonals1.add(diag1);
            diagonals2.add(diag2);

            backtrack(row + 1, columns, diagonals1, diagonals2);

            columns.delete(col);
            diagonals1.delete(diag1);
            diagonals2.delete(diag2);
        }
    }

    backtrack(0, new Set(), new Set(), new Set());
    return result;
}