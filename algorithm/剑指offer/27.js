/* 
输入字符串,按字典序打印所有排列
如输入abc,则打印：abc,acb,bac,bca,cab,cba
 */

/* 
分析：
递归思想：把大问题转换为若干小问题；
n个元素的全排列 = （n-1） 个元素全排列 + 一个元素作为前缀。
递归出口：只有一个元素的全排列，此时排序完成，输出数组。
解题：
遍历字符串，将每个字符放在第一个元素作为前缀，并将其余元素继续全排列。
 */

function Permutation(str) {
    if (!str) return []
    var result = sortString(str.split(''), '', [])
    return [...new Set(result)]
}

function sortString(arr, sortTemp, result) {
    if (arr.length === 0) {
        result.push(sortTemp)
    } else {
        arr.forEach((val, i) => {
            var temp = arr.splice(i, 1)[0]
            sortTemp += temp // 第一个元素作为前缀
            sortString(arr, sortTemp, result) // 其余元素继续全排列
            arr.splice(i, 0, temp) // 数组复原
            sortTemp = sortTemp.slice(0, sortTemp.length - 1) // 前缀复原
        })
    }
    return result
}
/* 
var result = Permutation('abbc')
console.log(result.toString(), result.length)
 */
