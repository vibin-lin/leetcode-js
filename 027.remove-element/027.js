let nums = [3, 2, 2, 2, 3, 3]
let val = 2

let fun = (nums,val) =>{
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == val){
            continue
        }
        nums[sum] = nums[i]
        sum++
    }
    return sum
}
console.log(fun(nums,val))
