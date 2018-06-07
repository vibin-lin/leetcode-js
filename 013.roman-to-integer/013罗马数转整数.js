/**
 * @param {string} s
 * @return {number}
 */

let romanToInt = function (s) {
    let StringToInt = function (s) {
        switch (s) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
                break;
        }
    }
    for (let i = 0; i < s.length; i++) {
        console.log(StringToInt(s[i]))
    }
    //  return Number(s)
}

console.log(romanToInt('IMI'))