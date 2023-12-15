/**
 * Функция для поиска самого длинного общего префикса в массиве строк.
 * @param {string[]} strs - Массив строк.
 * @returns {string} - Самый длинный общий префикс или пустая строка, если его нет.
 */
function longestCommonPrefix(strs) {
    // Проверка на пустой массив
    if (strs.length === 0) {
      return "";
    }
  
    // Начинаем сравнение с первой строки
    let prefix = strs[0];
  
    // Проходим по остальным строкам
    for (let i = 1; i < strs.length; i++) {
      let j = 0;
  
      // Сравниваем символы текущего префикса с символами текущей строки
      while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
        j++;
      }
  
      // Обновляем префикс до общей части
      prefix = prefix.substring(0, j);
  
      // Если префикс стал пустым, значит, нет общего префикса
      if (prefix === "") {
        break;
      }
    }
  
    return prefix;
  }