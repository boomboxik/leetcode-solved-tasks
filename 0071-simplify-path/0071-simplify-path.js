/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.replace(/\/+/g, '/');
    
    let segments = path.split('/');
    
    let stack = [];
    
    for (let segment of segments) {
        if (segment === '' || segment === '.') {
            continue;
        }
        if (segment === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(segment);
        }
    }
    
    let simplifiedPath = '/' + stack.join('/');
    
    return simplifiedPath;
};