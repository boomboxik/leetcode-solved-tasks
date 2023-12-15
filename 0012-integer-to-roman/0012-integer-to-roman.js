/**
 * Функция для конвертации числа в римское число.
 * @param {number} num - Входное число (1 <= num <= 3999).
 * @returns {string} - Римское число.
 */
function intToRoman(num) {
    // Определение всех возможных символов и их соответствующих значений.
    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    let result = "";
  
    // Проходим по всем символам и вычитаем их значение из входного числа.
    for (let i = 0; i < romanSymbols.length; i++) {
      while (num >= romanValues[i]) {
        // Вычитаем значение символа из числа и добавляем символ в результат.
        num -= romanValues[i];
        result += romanSymbols[i];
      }
    }
  
    return result;
  }