/**
 * Расширение палиндрома вокруг центра и возврат его длины.
 */
const getLength = (s, left, right) => {
    const canExpand = () => left >= 0 && right < s.length;
    const isSame = () => s[left] === s[right];

    while (canExpand() && isSame()) {
        left--;
        right++;
    }

    return right - left - 1;
}

/**
 * Поиск самой длинной полины подстроки.
 */
const search = (s, left = 0, right = 0) => {
    for (let index = 0; index < s.length; index++) {
        const lengthOdd = getLength(s, index, index);
        const lengthEven = getLength(s, index, index + 1);
        const maxLength = Math.max(lengthOdd, lengthEven);

        let newLeft = left;
        let newRight = right;

        if (maxLength > right - left) {
            newLeft = index - ((maxLength - 1) >> 1);
            newRight = index + (maxLength >> 1);
        }

        left = newLeft;
        right = newRight;
    }

    return [left, right];
}

/**
 * Ваще самую длинную найдем.
 */
var longestPalindrome = (s) => {
    if (s.length === 0) return '';

    const [left, right] = search(s);

    return s.slice(left, right + 1);
}