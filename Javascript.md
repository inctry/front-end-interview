### 1、 js 获取原型的方法？
p.__proto__
p.constructor.prototype
Object.getPrototypeOf(p)


### 2、什么是浏览器的同源政策？
我对浏览器的同源政策的理解是，一个域下的 js 脚本在未经允许的情况下，不能够访问另一个域的内容。这里的同源的指的是两个
域的协议、域名、端口号必须相同，否则则不属于同一个域。

同源政策主要限制了三个方面

第一个是当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。

第二个是当前域下的 js 脚本不能够操作访问操作其他域下的 DOM。

第三个是当前域下 ajax 无法发送跨域请求。

同源政策的目的主要是为了保证用户的信息安全，它只是对 js 脚本的一种限制，并不是对浏览器的限制，对于一般的 img、或者
script 脚本请求都不会有跨域的限制，这是因为这些操作都不会通过响应结果来进行可能出现安全问题的操作。


### 3、Javascript的Event Loop

Macrotask 常见的任务：

    setTimeout
    setInterval
    setImmediate
    I/O
    用户交互操作，UI渲染

Microtask 常见的任务：

    Promise.then/catch/finally （new Promise里的代码是同步的）
    process.nextTick(nodejs)
    Object.observe(不推荐使用)

执行顺序：首先先执行完执行栈中的任务，当执行栈为空时，将事件队列中的Microtask全部加入到执行栈中，执行完后再去首个Macrotask加入到执行栈中，以此循环

### 4、原型链继承的缺点

1、包含引用类型的原型属性会被所有实例属性共享，容易造成属性的修改混乱。

2、在创建子类型的实例时，不能向超类型的构造函数中传递参数。

### 5、call和apply的区别

它们的作用一模一样，区别仅在于传入参数的形式的不同。

apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数。
call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数。

### 6、cookie、localStorage和SessionStorage的区别

1）存储大小

cookie：一般不超过4K（因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识）

sessionStorage：5M或者更大

localStorage：5M或者更大

2）数据有效期

cookie：一般由服务器生成，可以设置失效时间；若没有设置时间，关闭浏览器cookie失效，若设置了时间，cookie就会存放在硬盘里，过期才失效

sessionStorage：仅在当前浏览器窗口关闭之前有效，关闭页面或者浏览器会被清除

localStorage：永久有效，窗口或者浏览器关闭也会一直保存，除非手动永久清除，因此用作持久数据

3）作用域

cookie：在所有同源窗口中都是共享的

sessionStorage：在同一个浏览器窗口是共享的（不同浏览器、同一个页面也是不共享的）

localStorage：在所有同源窗口中都是共享的

4）通信

ccokie：十种携带在同源的http请求中，即使不需要，故cookie在浏览器和服务器之间来回传递；如果使用cookie保存过多数据会造成性能问题

sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信；不会自动把数据发送给服务器，仅在本地保存

localStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信；不会自动把数据发送给服务器，仅在本地保存

5）易用性

cookie：需要自己进行封装，原生的cookie接口不够友好

sessionStorage：原生接口可以接受，可以封装来对Object和Array有更好的支持

localStorage：原生接口可以接受，可以封装来对Object和Array有更好的支持

### 7、event.target和event.currentTarget的区别

event.target —— 是引发事件（比如说点击的DOM）的“目标”元素，它在冒泡过程中不会发生变化。
this（===event.currentTarget) —— 是“当前”元素，也就是执行触发之后的函数所在DOM，
其中有一个当前正在运行的处理程序。










