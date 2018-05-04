//menus.js

Page({
    data: {
        item1: ['选项一', '选项二', '选项三'],
        currentIndex1:1,
        item2: ['选项一', '选项二', '选项三','选项一', '选项二', '选项三','选项一', '选项二', '选项三'],
        currentIndex2: 1,
        currentIndex3: 1,
        view_id:'a0'
    },
    onLoad: function () {
        var that = this;
        wx.createSelectorQuery().select('#a0').boundingClientRect(function (rect) {
            that.setData({width : rect.width})
        }).exec()
    },
    bindMenu1:function(e){
        var index = e.target.dataset.id;
        this.setData({ currentIndex1:index})
    },
    bindMenu2:function(e){
        var index = e.target.dataset.id;
        this.setData({ currentIndex2: index })        
    },
    bindMenu3: function (e) {
        console.log(e);
        var index = e.target.dataset.id;
        var id = e.target.id;
        var left = e.target.offsetLeft;
        var cute_left = this.data.width * 2;
        console.log(left, cute_left)
        this.setData({ 
            currentIndex3: index,
        })
        if (left < cute_left){
            this.setData({left:5})
        }else{
            this.setData({
                left: left - cute_left
            })           
        }
    },
    bindScroll:function(e){
        console.log(e);
    },
    onUnload:function(){
        console.log('aaa');
    }
})
