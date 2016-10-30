/**
 * 用于检查表单数据是否都已填写完毕
 * 
 * 版本 0.0.1
 * 
 * 更新时间 2016-10-29
 * 
 * 作者 sk
 * 
 * 主页 https://github.com/lxshui/sk.CheckFormData
 * 
 */

(function(window, undefined) {
    "use strict"; //严格模式
    var document = window.document;
    var _option = {
        ignoreType: 'hidden,image,submit', //不检查的input元素类型
        class: 'sk-form-check', //form元素的class属性
    };
    
    var sk = function() {
        var sk = {}; //创建sk对象
        sk.validate = function(option) {
                //组装配置
                if (option == 'undefined' || option == null) {
                    option = _option;
                } else {
                    if (option['ignoreType'] == 'undefined' || option['ignoreType'] == null) {
                        option['ignoreType'] = _option['ignoreType'];
                    }
                    if ('undefined' == option['class'] || option['class'] == null) {
                        option['class'] = _option['class'];
                    }
                }

                var forms = document.getElementsByClassName(option['class']);
                for (var index = forms.length - 1; index >= 0; index--) {

                    //input元素
                    var inputs = forms[index].getElementsByTagName("input");
                    var count = inputs.length;
                    for (var i = 0; i < count; i++) {
                        var type = inputs.item(i).getAttribute('type'); //元素类型
                        var ischeck = inputs.item(i).getAttribute('sk-isCheck'); //是否需要检查
                        var ischeck2 = option['ignoreType'].indexOf(type); //是否是需要检查的元素类型
                        if ((ischeck2 < 0) && ('false' != ischeck)) { //需要检查
                            var value = inputs.item(i).value.replace(/(^\s*)|(\s*$)/g,"");//删除空格
                            var sk_type = inputs.item(i).getAttribute('sk-type'); //自定义的类型
                            if (null == value || '' == value) {
                                switch (type) {
                                    case 'file':
                                        alert('请选择一个文件.');
                                        break;
                                    case 'password':
                                        alert('请输入密码.');
                                        break;
                                    case 'text':
                                        alert('尚未填完数据.');
                                        break;
                                    default:
                                        alert("尚未填完数据！");
                                }
                                inputs.item(i).focus(); //该元素获取焦点
                                event.preventDefault(); //取消浏览器默认操作(取消提交表单）
                                return false;
                            }
                            if ('number' == sk_type) { //某一个输入框只能输入数字
                                if (isNaN(value)) {
                                    inputs.item(i).focus(); //该元素获取焦点
                                    alert('请输入数字');
                                    event.preventDefault(); //取消浏览器默认操作，提交表单
                                    return false;
                                }
                            }
                        }
                    }
                    //textarea元素
                    var tas = forms[index].getElementsByTagName('textarea');
                    for (var i = tas.length - 1; i >= 0; i--) {
                        if (tas[i].value == null || tas[i].value == '') {
                            tas.item(i).focus(); //该元素获取焦点
                            alert("请填完数据");
                            event.preventDefault(); //取消浏览器默认操作，提交表单
                            return false;
                        }
                    }

                }


            } //validate 函数结尾

        //给自动验证的form添加验证事件
        window.onload = function() {
            var option = {
                class: 'sk-form-check-auto'
            }
            var forms = document.getElementsByClassName(option['class']); //自动验证，无需调用
            for (var i = forms.length - 1; i >= 0; i--) {
                forms[i].addEventListener('submit', function() {
                    sk.validate(option);
                });
            }
        }

        return sk;
    }();



    window.sk = sk;

})(window);
