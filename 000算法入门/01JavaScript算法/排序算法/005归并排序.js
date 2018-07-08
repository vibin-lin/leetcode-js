/**
 * 先进行划分, 在进行合并
 */

function mergeSort(arr) {
    console.time('算法时间')
    if(arr.length < 2){
        return arr
    }
    let middle = parseInt(arr.length/2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    if(left =='undefined' && right=='undefined'){
        return false
    }
    return merge(mergeSort(left), mergeSort(right))
    console.time('算法时间')
}

function merge(left, right) {
    let result = []
    while (left.length && right.length) {
        if(left[0] <= right[0]){
            //把left左子树推出一个, 然后pushjinresult数组里
            result.push(left.shift())
        }else{
            //把right的右子树推出一个, 然后push进result数组里
            result.push(right.shift())
        }
    }
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}

let arr = [99, 1, 3, 4, 2, 12, 33, 11, 22, 91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
mergeSort(arr)