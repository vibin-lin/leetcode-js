// 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
// 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。
function BubbleSort(arr) {
    let len = arr.length;
    let stop;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, stop = len - 1 - j; j < stop; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
    return arr
}
let arr = [99, 1, 3, 4, 2, 12, 33, 11, 22, ];
BubbleSort(arr)