//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {},
        anim1_flag:1
    },
    onLoad: function () {
        var that = this;
        wx.login({
            success: function (res) {
                if (res.code) {
                    that.setData({
                        anim1_flag: 2
                    })
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    },
    bindShop:function(){
        wx.navigateTo({
            url: '../shopping/shopping_one/shopping_one',
        })
    },
    bindList: function () {
        wx.navigateTo({
            url: '../lists/lists',
        })
    },
    bindModule:function(){
        wx.navigateTo({
            url: '../modules/modules',
        })        
    },
    bindCanvas:function(){
        wx.navigateTo({
            url: '../canvas/canvas',
        })              
    },
    bindAnims:function(){
        wx.navigateTo({
            url: '../css3/css3',
        })
    }
})
