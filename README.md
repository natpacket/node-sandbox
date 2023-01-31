# Node补环境壳
思路灵感来自陈不不大佬~

例子请看test.js

介绍: 目前是将128个常用的原型链对象的壳嵌入到node中了.壳是什么意思呢？就是将JS沙箱中定义原型链,定义property以及保护方法等庞大且冗余的代码，我们在node中直接定义(C++). 然后核心逻辑代码我们依旧使用JS实现.这样的话，大大减少了JS初始化沙箱耗时.我们只需要实现方法核心逻辑即可. 因为在底层定义对象, 大部分检测是不需要考虑的.

有啥bug联系我...

其实直接看例子就行了，视频 文章都是水出来的~
视频：https://www.bilibili.com/video/BV1Sv4y1k7Mu
文章：https://blog.csdn.net/weixin_44862184/article/details/128814472

后续更新会放到星球里 : https://t.zsxq.com/06bIUvBEM