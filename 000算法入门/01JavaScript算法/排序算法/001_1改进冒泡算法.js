/**
 * 改进冒泡排序： 设置一标志性变量pos, 用于记录每趟排序中最后一次进行交换的位置。 
 * 由于pos位置之后的记录均已交换到位, 故在进行下一趟排序时只要扫描到pos位置即可。
 */

function BubbleSort(arr) {
    let len = arr.length;
    let b;
    let pos = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, stop = len - 1 - j; j < stop; j++) {
            // > 从小到大排序
            // < 从大到小排序
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
                pos = j;
            }
        }
        b = pos;
    }
    console.log(arr)
    console.timeEnd('改进后冒泡排序耗时');
    return arr
}
let arr = [99, 1, 3, 4, 2, 12, 33, 11, 22, ];
BubbleSort(arr)
