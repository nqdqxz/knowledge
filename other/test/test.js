function hello() {
    var arr = [0, 1, 2, 3]
    // arr.forEach((val, i) => {
    //     console.log(val, i)
    //     arr.splice(i, 1)
    // })
    for (var i = 0, len = arr.length; i < len; i++) {
        console.log(i, arr[i])
        var t = arr.splice(i, 1)[0]
        arr.splice(i, 0, t)
    }
}
var r = hello('abc')
console.log(r)
