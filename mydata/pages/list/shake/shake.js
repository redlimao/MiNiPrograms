//pop.js

Page({
    data: {
        flag_pop1:1
    },
    onLoad: function () {
        wx.setTopBarText({
            text: 'hello, world!'
        })
    },
    bindShowPop1:function(){
        if (this.data.flag_pop1 == 1){
            this.setData({ flag_pop1 : 2})
        }
    },
    bindHidePop1:function(){
        if (this.data.flag_pop1 == 2) {
            this.setData({ flag_pop1: 1 })
        }
    }
})
