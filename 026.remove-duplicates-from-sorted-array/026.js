let nums = [1, 1, 2];
let fun = (nums) =>{
    if(nums==1){
        return [nums[1], 1]
    }
    return [Array.from(new Set(nums)), Array.from(new Set(nums)).length]
}
console.log(fun(nums))