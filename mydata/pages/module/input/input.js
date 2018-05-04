//input.js

Page({
    data: {
       
    },
    onLoad: function () {

    },
    //当键盘输入触发input事件
    bindInput:function(){
        wx.showModal({
            title: '提示',
            content: '触发bindInput',
            showCancel:false
        })
    },
    //获取焦点事件
    bindFocus: function () {
        wx.showModal({
            title: '提示',
            content: '获取焦点',
            showCancel: false
        })
    },
    //失去焦点事件
    bindBlur: function () {
        wx.showModal({
            title: '提示',
            content: '失去焦点',
            showCancel: false
        })
    },
    //提交事件
    bindConfirm: function () {
        wx.showModal({
            title: '提示',
            content: '提交',
            showCancel: false
        })
    }
})
