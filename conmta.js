var longestCommonPrefix = function(strs) {
    strs = []

    base = strs[0]
    
        for(let i = 0; i <= strs.length; i++) {
            for(let j = 1; j <= strs.length; i++){
                if(strs[j][i] !== base[i]) {
                    return base.substring(0, i)
                }
            }
        }
    
};

console.log(longestCommonPrefix("flor", "floresta", "florista"))