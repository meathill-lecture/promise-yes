Promise 的 N 种用法
=====================

这个标题是我临时起的，没想到站方直接拿来走宣传流程了……所以就不改了，就这么着吧。

## [幻灯片地址](https://meathill-lecture.github.io/promise-yes/)

## [直播间](https://segmentfault.com/l/1500000008757392)

开播时间：2017-04-06 20:00:00

--------

## 内容简介

为解决异步函数的回调陷阱，开发社区不断摸索，终于折腾出来 Promise 这套方案。它不增加新的语法，可以适配当前的主流浏览器；写出来的代码也很好读懂；并且包含优秀的调试和捕获异常方案。在迭代中逐步完善，最终被吸收进 ES2015 规范。

现在大部分浏览器和 Node.js 都已原生支持 Promise，很多类库也开始返回 Promise 对象，即使面对 IE，也有各种降级适配策略。如果您现在还不会使用 Promise，那么我建议您尽快学习一下。

本次分享我准备结合近期的一些开发经验，总结一下 Promise 常见用法，介绍一下我踩过的坑。分享大纲如下：

1. 什么是 Promise
2. 为什么要用 Promise
2. Promise 详解
3. 简单范例
4. 复杂加载过程
6. 改进代码可读性
7. 常见错误

分享长度：约1小时
分享难度：需要了解 JavaScript，最好有相关开发经验

## 范例代码

```
sample
```

## 协议

代码部分采用 [MIT](https://opensource.org/licenses/MIT) 进行许可。

[![知识共享许可协议](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
Slide 和文档部分采用 [CC4.0](http://creativecommons.org/licenses/by/4.0/) 进行许可