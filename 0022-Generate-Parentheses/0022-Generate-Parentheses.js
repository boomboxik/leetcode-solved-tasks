/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    
    // Вспомогательная функция для рекурсивного генерирования комбинаций
    const generate = function(str, open, close) {
        // Если количество открывающих и закрывающих скобок достигло n, добавляем комбинацию в результат
        if (open === n && close === n) {
            result.push(str);
            return;
        }
        
        // Если количество открывающих скобок меньше n, добавляем открывающую скобку
        if (open < n) {
            generate(str + '(', open + 1, close);
        }
        
        // Если количество закрывающих скобок меньше открывающих, добавляем закрывающую скобку
        if (close < open) {
            generate(str + ')', open, close + 1);
        }
    };
    
    // Начинаем с пустой строки и нулевых открывающих и закрывающих скобок
    generate('', 0, 0);
    
    return result;
};