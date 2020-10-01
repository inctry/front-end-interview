/**
  封装Jsonp实现跨域
 */
function jsonp(url, params, callback) {
    let urlString = url.indexOf('?') === -1 ? '?' : '&'
    for(let key in params) {
        if(params.hasOwnProperty(key))
        urlString += `${key}=${params[key]}&`
    }
    let random = Math.random().toString().replace('.', '')
    let fn_name = `json_${random}`
    urlString += `callback=${fn_name}`
    
    let script = document.createElement('script')
    script.src = url + urlString
    console.log(script);
    window.fn_name = function(params) {
        callback(params)

        document.getElementsByTagName('head')[0].removeChild(script)
    }
    document.getElementsByTagName('head')[0].appendChild(script)
}

jsonp('https://baidu.com',
    {id: 10},
    function() {
        console.log(params);
    }
)