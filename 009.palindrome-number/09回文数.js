/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    var arr = String(x)
    var len = Math.floor(arr.length / 2)
    for (let i = 0; i < len; i++) {
        if (arr[i] == arr[arr.length - i-1]) {
            continue;
        }
        return false;
    }
    return true;
}

console.log(isPalindrome(-123454321))