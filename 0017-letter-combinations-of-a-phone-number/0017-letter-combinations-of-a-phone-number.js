/**
 * Функция для получения всех возможных буквенных комбинаций для числа на телефоне.
 * @param {string} digits - Входная строка с числами от 2 до 9 включительно.
 * @returns {string[]} - Массив всех возможных буквенных комбинаций.
 */
const letterCombinations = (digits) => {
    // Маппинг цифр на соответствующие буквы
    const digitMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    // Результирующий массив комбинаций
    const result = [];
  
    // Рекурсивная функция для генерации комбинаций
    const generateCombinations = (current, index) => {
      // Если достигнут конец строки digits, добавляем текущую комбинацию в результат
      if (index === digits.length) {
        result.push(current);
        return;
      }
  
      // Получаем буквы, соответствующие текущей цифре
      const letters = digitMap[digits[index]];
  
      // Рекурсивно вызываем функцию для следующей цифры
      for (const letter of letters) {
        generateCombinations(current + letter, index + 1);
      }
    };
  
    // Проверка на пустую строку
    if (digits.length > 0) {
      generateCombinations('', 0);
    }
  
    return result;
  };