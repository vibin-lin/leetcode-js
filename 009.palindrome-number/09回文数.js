/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = (s) => {
  //方法一
  // return x.split("").reverse().join("")
  //方法二 最快
  // let restr = '';
  // for (let i = s.length - 1; i >= 0; i--) {
  //   restr += s[i];
  // }
  //方法三
  let ary = s.split('');
  for (let i = 0; i < (s.length - 1) / 2; i++) {
    let temp = ary[i];
    ary[i] = ary[s.length - i - 1];
    ary[s.length - i - 1] = temp;
  }
  return ary.join('');
}

console.log(isPalindrome('asd'))