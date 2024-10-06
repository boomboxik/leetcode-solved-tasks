function combine(n, k) {
    const result = [];
    
    function backtrack(start, combo) {
        if (combo.length === k) {
            result.push([...combo]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            combo.push(i);  
            backtrack(i + 1, combo); 
            combo.pop();     
        }
    }
    
    backtrack(1, []);
    return result;
}