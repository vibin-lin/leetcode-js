/**
 * 选择排序是一种简单直观的排序算法， 无论什么数据进去都是 O(n²) 的时间复杂度。
 * 所以用到它的时候， 数据规模越小越好。 唯一的好处可能就是不占用额外的内存空间了吧。
 * 
 * 逻辑:
 * 每一次内循环遍历寻找最小的数， 记录下 minIndex， 并在这次内循环结束后交换 minIndex 和 i 的位置。
 * 重复这样的循环 n - 1 次即得到结果。
 * 
 * 属性: 
 * 不稳定
 * Θ(n²) 无论什么输入， 均为 Θ(n²)
 * Θ(n) 交换: 注意， 这里只有 n 次的交换， 选择排序的唯一优点
 * 
 * 核心概念:
 * “可预测” 的时间复杂度， 什么进来都是 O(n²)， 但不稳定， 唯一的优点是减少了 swap 次数。
 */

function selectionSort(arr) {
    console.time('选择排序的时间')
    let len = arr.length
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = 1;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.timeEnd('选择排序的时间')
}

let arr = [99, 1, 3, 4, 2, 12, 33, 11, 22];
selectionSort(arr)