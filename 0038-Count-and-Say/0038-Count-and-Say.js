function countAndSay(n) {
    if (n === 1) return "1"; // Base case

    let result = "1"; // Start with the base case

    for (let i = 2; i <= n; i++) {
        result = getNextSequence(result);
    }

    return result;
}

function getNextSequence(sequence) {
    let nextSequence = "";
    let count = 1;

    for (let i = 1; i <= sequence.length; i++) {
        if (sequence[i] === sequence[i - 1]) {
            count++;
        } else {
            nextSequence += count.toString() + sequence[i - 1];
            count = 1;
        }
    }

    return nextSequence;
}