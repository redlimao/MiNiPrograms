//animation.js

Page({
    data: {
        animationData: {
            
        }
    },
    onLoad: function () {

    },
    bindAnim1:function(){
        var animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 1000,
            timingFunction: "ease",
            delay: 0
        })
        animation.scale(2, 2).rotate(45).step();
        animation.translate(100, 100).step({ duration: 500 });
        this.setData({
            animationData: animation.export()
        })
    }
})
