/**
 * @param {string[]} strs
 * @returns {string}
 */

var longestCommonPrefix = function (strs) {
    if (strs.length < 2) {
        return strs[0] ? strs[0] : "";
    }else if(strs[0] == ''){
        return ''
    }
    let arr = ''
    let minLen = strs[0].length
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < minLen) {
            minLen = strs[i].length
        }
    }
    let num = 0
    //数组的长度
    for (let i = 0; i < minLen ; i++) {
        num = 0
        //单个字符的长度
        for (let j = 0; j <= strs.length; j++) {
            let str = strs[0][j]
            // console.log(i, j, str)
            if (strs[i][j] !== strs[i+1][j]) {
                // console.log(i,j)
                if (j > 0) {
                    arr += strs[0].substring(0, num)
                }
                return arr
            }
            num++
        }
        // console.log(num)
    }
}

console.log(longestCommonPrefix(["aa", "aa"]))