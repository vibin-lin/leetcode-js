let str = 'pwwkew'

/**
 * 
 * @param {number[]} nums
 * @param {number} res
 * @return {number[]} 
 */
let fun = (str) => {
    if(str.length<=2){
        return str;
    }
    let maxLen = 0;
    let l = 0;
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            console.log(i,j)
            console.log(str[i],str[j])
        }
    }
}
console.log(fun(str));