//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        flag:1
    },
    onLoad: function () {
        var that = this;
        wx.login({
            success: function (res) {
                if (res.code) {
                    that.setData({
                       
                    })
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    },
    // 获取用户信息
    bindGetUserInfo:function(e){
        var that = this;
        wx.showLoading({
            title: '登陆中',
            mask: true,
            success: function(res) {
                var rawData = JSON.parse(e.detail.rawData);
                that.setData({
                    flag: 2,
                    avatarUrl: rawData.avatarUrl,
                    nickName: rawData.nickName
                })
            },
            complete:function(){
                wx.hideLoading();
                wx.showToast({
                    title: '登陆成功',
                    icon: 'none',
                    mask: true,
                })
            }
        })

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
