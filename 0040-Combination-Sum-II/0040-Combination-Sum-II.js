function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const results = [];

    function backtrack(remaining, start, combination) {
        if (remaining === 0) {
            results.push([...combination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > remaining) {
                break;
            }

            combination.push(candidates[i]);
            backtrack(remaining - candidates[i], i + 1, combination);
            combination.pop();
        }
    }

    backtrack(target, 0, []);
    return results;
}