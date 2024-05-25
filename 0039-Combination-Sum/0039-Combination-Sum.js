/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    const dfs = (current, start, target) => {
        if (target === 0) {
            result.push([...current]);
            return;
        }
        if (target < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            dfs(current, i, target - candidates[i]);
            current.pop();
        }
    };
    
    dfs([], 0, target);
    return result;
};