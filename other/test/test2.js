var my = `coursera-placement-resumes.s3.amazonaws.com;coursera.org;d2wvvaown1ul17.cloudfront.net;eventing.coursera.org;linkedin.com;ogp.me;s3.amazonaws.com;schema.org;ssl.google-analytics.com;thelearningpoint.net`
var expect = `coursera-placement-resumes.s3.amazonaws.com;coursera.org;d2wvvaown1ul17.cloudfront.net;eventing.coursera.org;linkedin.com;ogp.me;s3.amazonaws.com;schema.org;ssl.google-analytics.com;thelearningpoint.net`
var arr1 = my.split(';')
var arr2 = expect.split(';')
console.log(diff(arr2, arr1))

function diff(arr1, arr2) {
    var r = []
    arr1.forEach((item) => {
        if (arr2.indexOf(item) === -1) {
            r.push(item)
        }
    })
    return r
}
