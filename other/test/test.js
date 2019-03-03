// var next = [-1, 0, 0, 0, 0, 1, 2]

function getNext(w) {
    var next = [-1]
    var j = 0
    var k = -1
    while (j < w.length - 1) {
        if (k === -1 || w[j] === w[k]) {
            j++
            k++
            next[j] = k
        } else {
            k = next[k]
        }
    }
    return next
}

function hello(s, w) {
    var i = 0
    var j = 0
    var next = getNext(w)
    console.log(next)
    while (i < s.length && j < w.length) {
        if (j === -1 || s[i] === w[j]) {
            i++
            j++
        } else {
            j = next[j]
        }
    }
    if (j === w.length) {
        return i - j
    }
    return -1
}
var r = hello('BBC ABCDAB ABCDABCDABDE', 'ABCDABD')
console.log(r, r === 15)
