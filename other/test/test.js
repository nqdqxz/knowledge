function hello(s1, s2) {
    var T = []
    var arr1 = s1.split('')
    var arr2 = s2.split('')
    arr1.unshift('') // ['', 'a', 'b', 'c']
    arr2.unshift('') // ['', 'a', 'c', 'b']
    for (var i = 0, len1 = arr1.length; i < len1; i++) {
        T[i] = []
        for (var j = 0, len2 = arr2.length; j < len2; j++) {
            if (i === 0 || j === 0) {
                T[i][j] = 0
            } else if (arr1[i] === arr2[j]) {
                T[i][j] = T[i - 1][j - 1] + 1
            } else {
                T[i][j] = Math.max(T[i - 1][j], T[i][j - 1])
            }
        }
    }
    console.log(JSON.stringify(T))
    return findResult(arr1, arr2, T)
}

function findResult(arr1, arr2, T) {
    var result = []
    var i = arr1.length - 1
    var j = arr2.length - 1
    while (i > 0 && j > 0) {
        if (arr1[i] === arr2[j]) {
            result.unshift(arr1[i])
            i--
            j--
        } else {
            if (T[i - 1][j] > T[i][j - 1]) {
                i--
            } else {
                j--
            }
        }
    }
    return result
}
var r = hello('abc', 'acb')
console.log(JSON.stringify(r)) // ac
