// 有两个大小分别为m和n的排序数组nums1和nums2。
// 查找两个排序数组的中位数。 总的运行时间复杂度应该是O（ log（ m + n））。

// 例1：
// Nums1 = [1, 3]
// Nums2 = [2]
// 中位数是2 .0

// 例2：
// Nums1 = [1, 2]
// Nums2 = [3, 4]
// 中位数是（ 2 + 3） / 2 = 2.5

/**
 * 解题思路
 * 先判断其中一个数组是否为空
 * 再将数组从小到大排序
 * 在看是否为奇数, 取中间的数
 */
let Nums1 = [1, 2]
let Nums2 = [3, 4]

let fun = (Nums1, Nums2) =>{
    //查找中间数
    let FindMeDian = (arr) =>{
        console.log(arr)
        arr.sort()
        let Min = Math.floor(arr.length / 2) -1
        console.log('Min', Min,arr)
        //如果是偶数, 取最中间两位, 如果是奇数取中间那位
        if (arr.length % 2) {
            return arr[Min]
        }else {
            return (arr[Min] + arr[Min+1])/2
        }
    }
    console.log(FindMeDian(Nums1));
}

fun(Nums1, Nums2)