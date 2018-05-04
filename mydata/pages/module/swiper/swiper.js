//list.js

Page({
    data: {
        img: ['../../../images/banner1.jpg', '../../../images/banner2.jpg', '../../../images/banner3.jpg'],
        current:0
    },
    onLoad: function () {

    },
    //current 改变时会触发 change 事件
    bindHint:function(e){
        var index = e.detail.current;
        this.setData({
            current: index
        })
        switch (index) {
            case 0:
                wx.showToast({
                    title: '第一张',
                })
                break;
            case 1:
                wx.showToast({
                    title: '第二张',
                })
                break;
            case 2:
                wx.showToast({
                    title: '第三张',
                })
                break;
        }
    }
})
