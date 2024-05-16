function isValidSudoku(board) {
    // Функция для проверки наличия повторяющихся элементов в массиве
    const hasDuplicates = (arr) => {
        const set = new Set(arr.filter(el => el !== '.'));
        return set.size !== arr.filter(el => el !== '.').length;
    };
    
    // Проверка строк
    for (let i = 0; i < 9; i++) {
        if (hasDuplicates(board[i])) {
            return false;
        }
    }
    
    // Проверка столбцов
    for (let j = 0; j < 9; j++) {
        const column = [];
        for (let i = 0; i < 9; i++) {
            column.push(board[i][j]);
        }
        if (hasDuplicates(column)) {
            return false;
        }
    }
    
    // Проверка 3x3 под-квадратов
    const subBoxCoordinates = [
        [0, 0], [0, 3], [0, 6],
        [3, 0], [3, 3], [3, 6],
        [6, 0], [6, 3], [6, 6]
    ];
    
    for (const [startRow, startCol] of subBoxCoordinates) {
        const box = [];
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                box.push(board[i][j]);
            }
        }
        if (hasDuplicates(box)) {
            return false;
        }
    }
    
    return true;
}