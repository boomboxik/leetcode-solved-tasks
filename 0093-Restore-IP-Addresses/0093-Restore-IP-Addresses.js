function restoreIpAddresses(s) {
    const result = [];
    
    function backtrack(path, start) {

        if (path.length === 4) {
            if (start === s.length) {
                result.push(path.join('.'));
            }
            return;
        }
        
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;
            const segment = s.substring(start, start + len);
            
            if ((segment[0] === '0' && segment.length > 1) || parseInt(segment) > 255) continue;
            
            path.push(segment);     
            backtrack(path, start + len); 
            path.pop();                 
        }
    }
    
    backtrack([], 0);
    return result;
}