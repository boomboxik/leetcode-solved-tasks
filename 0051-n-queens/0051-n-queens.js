let board;

var getPosition = function(x, y) {
    return board[x][y];
}

var underAttack = function(cell1, cell2) {
    const [x1, y1] = cell1;
    const [x2, y2] = cell2;

    // Check if they are in the same row, column, or diagonal
    return x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2);
}

var placeFigure = function(x, y) {
    board[x][y] = 'Q';
}

var drawBoard = function(n) {
    board = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(".");
        }
        board.push(row);
    }
}

var solveNQueens = function(n) {
    drawBoard(n);
    const solutions = [];

    var isSafe = function(x, y) {
        for (let i = 0; i < x; i++) {
            if (underAttack([i, board[i].indexOf('Q')], [x, y])) {
                return false;
            }
        }
        return true;
    }

    var solve = function(x) {
        if (x === n) {
            const solution = board.map(r => r.join(''));
            solutions.push(solution);
            return;
        }

        for (let y = 0; y < n; y++) {
            if (isSafe(x, y)) {
                placeFigure(x, y);
                solve(x + 1);
                board[x][y] = '.';
            }
        }
    }

    solve(0);
    return solutions;
}