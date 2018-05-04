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
                    //获取用户信息
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res);
                            // var userInfo = res.userInfo
                            // var nickName = userInfo.nickName
                            // var avatarUrl = userInfo.avatarUrl
                            // var gender = userInfo.gender
                            // var province = userInfo.province
                            // var city = userInfo.city
                            // var country = userInfo.country
                            that.setData({
                                userInfo: res.userInfo,
                                anim1_flag : 2
                            })
                            console.log(that.data.userInfo)
                        }
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
