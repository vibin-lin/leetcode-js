let nums = [1, 2, 3, 4];
let res = 4;

let fun = (nums, res) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == res) {
                return [i, j];
            }
        }
    }
}
console.log(fun(nums, res));