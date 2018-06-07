// 给定一个32位有符号整数, 将整数中的数字进行反转
/**
 * input: 123  put: 321
 * input: -123 put: -321
*/

/**
 * @param {number}
 * @returns {number}
 */
let reverse = function (x) {
    var flo;
    x<0?flo=false:flo=true;
    var a = Math.abs(x)+ '';
    a = flo ? Number(a.split('').reverse().join('')) : -Number(a.split('').reverse().join(''))
    if (a > Math.pow(2, 31) || -a > Math.pow(2, 31)) {
        a = 0;
    }
    return a
}


console.log(reverse(-123123123123123))