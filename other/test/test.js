function digitToChina(digit) {
    var r = ''
    var arr1 = ['', '十', '百', '千', '万', '十', '百', '千', '亿']
    var arr2 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    if (typeof digit !== 'number' || digit < 0) return '零'
    var input = String(digit)

}

var r = digitToChina(12053005)
console.log(r)
