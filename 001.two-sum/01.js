let nums = [2,7,11,15]
let target = 9

/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */

// 暴力解法
let twoSum = (nums,target)=>{
  for(let i =0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
}
console.log(twoSum(nums,target))