###1、块级元素和内联元素的区别

块级元素的特点

1、块级元素独占一行
2、可设置元素的宽度、高度、行高、外边距、内边距
4、块级元素占据其父元素（容器）的整个空间
5、可以容纳内联元素和其他块元素

内联元素的特点

1、和其他元素都在一行上；
2、元素的宽度、高度不可设置，可设置行高 line-height
3、元素的宽度就是它包含的文字或图片的宽度，不可改变。
4、内联元素只能容纳文本或者其他内联元素

###2、块元素继承属性

text-align，text-indent

###3、简单谈谈行高，行距

行高是指文本行基线间的垂直距离。 基线（base line）并不是汉字文字的下端沿，而是英文字母“x”的下端沿。下图中两条红线之间的距离就是行高，上行的底线和下一行顶线之间的距离就是行距，而同一行顶线和底线之间的距离是font-size的大小，行距的一半是半行距。
![avatar](/20180920105701124.png)

###4、页面导入样式时，使用 link 和 @import 有什么区别？
（1）从属关系区别。 @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加
     载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等。

（2）加载顺序区别。加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。

（3）兼容性区别。@import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。

（4）DOM 可控性区别。可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用 @import 的方式插入样式。

###5 垂直，水平居中
####水平居中

行内元素: text-align: center
块级元素: margin: 0 auto
position:absolute +left:50%+ transform:translateX(-50%)
display:flex + justify-content: center

设置line-height 等于height
position：absolute +top:50%+ transform:translateY(-50%)
display:flex + align-items: center
display:table+display:table-cell + vertical-align: middle;

###6、页面生命周期

DOMContentLoaded 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。

load 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。

beforeunload 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。

unload 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。









