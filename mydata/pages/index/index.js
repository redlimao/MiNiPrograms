//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        flag:1
    },
    onLoad: function () {
        var that = this;
        //获取图像和姓名
        wx.getStorage({
            key: 'user',
            success: function(res) {
                that.setData({
                    flag: 2,
                    avatarUrl: res.data.avatarUrl,
                    nickName: res.data.nickName
                })
            },
            fail:function(res){
                that.setData({
                    flag: 1
                })
            }
        })
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
                var userinfo = {
                    avatarUrl: rawData.avatarUrl,
                    nickName: rawData.nickName
                };
                wx.setStorage({
                    key: 'user',
                    data: userinfo ,
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
