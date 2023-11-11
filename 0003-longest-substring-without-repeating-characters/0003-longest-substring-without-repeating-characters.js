/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Время O(N) | Память O(N)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Проверка на случай пустой строки или строки из одного символа
    if (s.length <= 1) {
        return s.length;
    }

    // Set для отслеживания уникальных символов в текущей подстроке
    const charSet = new Set();

    // Левый и правый указатели для обозначения границ текущей подстроки
    let left = 0;
    let maxSubstringLength = 0;

    // Итерация по строке с использованием цикла for-of
    for (const rightChar of s) {
        // Пока текущий символ уже присутствует в подстроке, смещаем левую границу
        while (charSet.has(rightChar)) {
            charSet.delete(s[left]);
            left++;
        }

        // Добавляем текущий символ к подстроке
        charSet.add(rightChar);

        // Обновляем максимальную длину подстроки
        maxSubstringLength = Math.max(maxSubstringLength, charSet.size);
    }

    // Возвращаем максимальную длину подстроки без повторяющихся символов
    return maxSubstringLength;
};
