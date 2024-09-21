function subsets(nums) {
    let result = [[]];  
    
    for (let num of nums) {
        let newSubsets = [];

        for (let subset of result) {
            newSubsets.push([...subset, num]);
        }

        result = result.concat(newSubsets);
    }
    
    return result;
}