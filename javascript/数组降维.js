function fn(arr) {
    while( arr.some( item => Array.isArray(item) ) ) {
        arr = arr.concat(...arr)
    }
    return arr
}
console.log(fn([1,[[2],3, 4], 5]))