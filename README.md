# sk.CheckFormData

## 干啥的
用于检查表单数据是否都已填写完毕和验证表单控件数据格式，比如只允许输入日期、数字，没则弹窗提示并且取消表单提交。

## 使用方法
1.引用js文件 sk.CheckFormData.js
1.在你需要检查的form元素添加class：sk-form-check-auto   ,插件即会在页面初始化后给有类sk-form-check-auto的form添加onsubmit事件并在提交表单时检查必填的控件是否填写了。
>  更多使用方式  [请点我点我](document/document.md)     
>  [API文档](document/api.md)

## 特点
- 简单易用
- 适合小网站使用
- 不依赖jquery库
- 浏览器兼容性好

## 开发宗旨
懒到极致！易用到极致。  
宁可开发者多写10行代码也不能让用户使用时多写1行代码


## 发展方向
学习使用jquery那样的框架将插件越搞越好

## 版本更新

### 0.1.1 
1.修复自动验证（使用sk-form-check-auto）的时候无法阻止表单提交的bug。

### 0.1.0
1. 添加了type类型为text却要求输入时间或者日期的input控件验证

### 0.0.1
1. 真正的算一个插件吧，就叫插件吧。很多东西要搞，连example都还没有呢


