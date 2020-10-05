/* 防抖 */
function debounce(fn, ti) {
    let timecount = null
    return function() {
        let args = arguments
        let context = this
        if(timecount !== null) clearTimeout(timecount)
        timeout = setTimeout(fn.apply(context, args), ti)
    }
}