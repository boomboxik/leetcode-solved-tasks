function getPermutation(n, k) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    k--;

    function findPermutation(numbers, k) {
        if (numbers.length === 0) {
            return '';
        }

        let count = 1;
        for (let i = 1; i < numbers.length; i++) {
            count *= i;
        }

        let index = Math.floor(k / count);
        let selected = numbers[index];
        numbers.splice(index, 1);

        return selected + findPermutation(numbers, k % count);
    }

    return findPermutation(numbers, k);
}