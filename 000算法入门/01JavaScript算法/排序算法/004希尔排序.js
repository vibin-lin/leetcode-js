/**
 * 希尔排序是插入排序的改进版， 它克服了插入排序只能移动一个相邻位置的缺陷（ 希尔排序可以一次移动 gap 个距离）， 利用了插入排序在排序几乎已经排序好的数组的非常快的优点。
 * 使用可以动态定义的 gap 来渐进式排序， 先排序距离较远的元素， 再逐渐递进， 而实际上排序中元素最终位置距离初始位置远的概率是很大的，所以希尔排序大大提升了性能（尤其是reverse的时候非常快，想象一下这时候冒泡排序和插入排序的速度）。
 * 而且希尔排序不仅效率较高（比冒泡和插入高），它的代码相对要简短，低开销（继承插入排序的优点），追求这些特点（效率要求过得去就好，代码简短，开销低，且数据量较小）的时候希尔排序是好的O(n·log(n))算法的替代品。
 * 总而言之： 希尔排序的性能优化来自增量队列的输入和 gap 的设定。
 * 
 * 属性:
 * 不稳定
 */


function shellSort(arr) {
    console.time('希尔排序的速度')
    let len = arr.length
    let temp, gap = 1
    while (gap < len / 3) {
        gap = gap * 3 + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i]
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = temp
        }
    }
    console.timeEnd('希尔排序的速度')
    return arr
}

let arr = [99, 1, 3, 4, 2, 12, 33, 11, 22, 91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
shellSort(arr)