const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function(strs) {
    const groupedAnagrams = {};

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (!groupedAnagrams[sortedStr]) {
            groupedAnagrams[sortedStr] = [];
        }
        
        groupedAnagrams[sortedStr].push(str);
    }
    
    return Object.values(groupedAnagrams);
};

console.log(groupAnagrams(strs));