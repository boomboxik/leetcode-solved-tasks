/**
 * Функция для проверки валидности строки
 * @param {string} s - Входная строка.
 * @returns {boolean} - Возвращает true, если строка валидна, и false в противном случае.
 */
function isValid(s) {
    // Создаем стек для хранения открытых скобок
    const stack = [];
    
    // Создаем объект для определения соответствия открытых и закрытых скобок
    const bracketPairs = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    
    // Перебираем символы в строке
    for (let i = 0; i < s.length; i++) {
      const currentBracket = s[i];
      
      // Если текущая скобка - открытая, добавляем ее в стек
      if (bracketPairs.hasOwnProperty(currentBracket)) {
        stack.push(currentBracket);
      } else {
        // Если текущая скобка - закрытая проверяем, есть ли соответствующая открытая скобка в стеке
        const lastOpenBracket = stack.pop();
        
        // Если нет соответствия или порядок неверен, возвращаем false
        if (bracketPairs[lastOpenBracket] !== currentBracket) {
          return false;
        }
      }
    }
    
    // Проверяем, что весь стек был опустошен
    return stack.length === 0;
  }