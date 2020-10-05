/* 节流 */

function throttle(fn, delay) {
    let pretime = Date.now()
    return function() {
        let nowtime = Date.now()
        let args = arguments
        let context = this
        if(nowtime - pretime >= delay) {
            pretime = Date.now()
            fn.apply(context, args)
        } 
    }
}