function MyPromise(executor) {
    let self = this
    self.value = undefined
    self.reason = undefined
    self.state = "PENDING"
    self.onFullifilledCallbacks = []
    self.onRejectedCallbacks = []

    function resolve(value) {
        if(self.state === "PENDING") {
            self.state = "RESOLVED"
            self.value = value
            self.onFullifilledCallbacks.forEach((t) => t(value))
        }
    }
    function reject(reason) {
        if(self.state === "PENDING") {
            self.state = "REJECTED"
            self.reason = reason;
            self.onRejectedCallbacks.forEach((t) => t(reason))
        }
    }

    try {
        executor(resolve, reject)
    } catch {
        reject(e)
    }
}
MyPromise.prototype.then = function(onFullifilledFn, onRejectedFn) {
    onFullifilledFn = typeof onFullifilledFn === 'function' ? onFullifilledFn : (value) => value
    onRejectedFn = typeof onRejectedFn === 'function' ? onRejectedFn : (e) => {throw e}

    let self = this
    let promise2 = null
    if(this.state === 'RESOLVED') {
        promise2 = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onFullifilledFn(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch(e) {
                    reject(e)
                }
            })
        })
    }
    if(this.state === 'REJECTED') {
        promise2 = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejectedFn(self.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch(e){
                    reject(e)
                }
            })
        })
    }
    if(this.state === 'PENDING') {
        promise2 = new MyPromise((resolve, reject) => {
            self.onFullifilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFullifilledFn(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                })
            })
            self.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejectedFn(self.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                })
            })
        })
    }
    return promise2
}
function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {  
      return reject(new TypeError("Cyclic reference"));
    }
    let isUsed;
  
    if (x !== null && (typeof x === "object" || typeof x === "function")) { 
      try {
        let then = x.then;
        if (typeof then === "function") {
          //
          then.call(x, function (v) {
            if (isUsed) return;
            isUsed = true;
            resolvePromise(promise, v, resolve, reject)
          }, function (e) {
            if (isUsed) return;
            isUsed = true;
            reject(e);
          })
        } else {
          resolve(x);
        }
      } catch (e) {
        if (isUsed) return;
        isUsed = true;
        reject(e);
      }
    } else {
      resolve(x);
    }
  }


  MyPromise.deferred = function () {
    let dfd = {};
    dfd.promise = new MyPromise(function (resolve, reject) {
      dfd.resolve = resolve;
      dfd.reject = reject;
    });
    return dfd;
  }
  module.exports = MyPromise;
// test 
  setTimeout(() => console.log("timeout"));

  new MyPromise((resolve) => {
      resolve(null)
  }).then(() => console.log("promise"));
  
  console.log("code");