/*
请使用Promise封装Ajax操作
原始的Ajax操作如下：
复制代码

var onSuccess = function(result){}; //成功的回调
var onFail = function(error){}; //失败的回调
var req = new XMLHttpRequest();
req.open("POST", "www.baidu.com", true);
req.onload = function(){
  if(req.readyState === 4 && req.status === 200){
    onSuccess(req.response);
  } else {
    onFail(req.statusText);
  }
}
req.onerror = function(){
  onFail(Error("网络异常"));
} */

let promise = new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest()
    req.open("POST", 'www.baidu.com', true)
    req.onload = () => {
        if(req.readyState === 4 && status === 200) {
            resolve(req.response)
        } else {
            reject(req.statusText)
        }
    }
    req.onerror = () => {
        reject(Error('网络异常'))
    }
})
