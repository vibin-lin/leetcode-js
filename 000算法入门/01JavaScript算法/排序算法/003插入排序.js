/**
 * 默认 a[0] 为已排序数组中的元素,从 arr[1] 开始逐渐往已排序数组中插入元素,从后往前一个个比较,
 * 如果待插入元素小于已排序元素,则已排序元素往后移动一位,直到待插入元素找到合适的位置并插入已排序数组。
 * 经过 n - 1 次这样的循环插入后排序完毕。
 * 
 * 属性
 * 稳定
 * 适合场景： 对快要排序完成的数组时间复杂度为 O(n)
 * 非常低的开销
 * 时间复杂度 O(n²)
 * 
 * 核心概念
 * 高性能, 低开销, 而且稳定
 * 利用二分查找来优化
 * 
 * PS:
 * 其实就和打牌的时候怎么把排从大到小排序一样
 */

function insertionSort(arr) {
    console.time('插入排序的时间')
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        const temp = arr[i]
        let preIndex = i - 1
        while (arr[preIndex] > temp) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex -= 1
        }
        arr[preIndex + 1] = temp
    }
    console.timeEnd('插入排序的时间')
}

function insertionSort1(arr) {
    console.time('二分法插入排序的时间')
    let len = arr.length

    function binarySearch(arr, maxIndex, value) {
        let min = 0
        let max = maxIndex
        while (min <= max) {
            const mid = Math.floor((min + max) / 2)

            if (arr[mid] <= value) {
                min = mid + 1
            } else {
                max = mid - 1
            }
        }
        return min
    }
    for (let i = 0; i < len; i++) {
        const temp = arr[i]
        const insertIndex = binarySearch(arr, i - 1, arr[i])
        for (let preIndex = i - 1; preIndex >= insertIndex; preIndex--) {
            arr[preIndex + 1] = arr[preIndex]
        }
        arr[insertIndex] = temp
    }
    console.timeEnd('二分法插入排序的时间')
    return arr
}


let arr = [99, 1, 3, 4, 2, 12, 33, 11, 22, 91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
insertionSort(arr)
insertionSort1(arr)