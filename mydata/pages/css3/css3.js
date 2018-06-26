//index.js
Page({
    data: {
        list:[{
            id:0,
            name:'动画一',
            url:'../anims/animone/animone'
        }, {
            id: 1,
            name: '逐帧动画',
            url: '../anims/animtwo/animtwo'
        }, {
            id: 2,
            name: '水波图片动画',
            url: '../anims/animthree/animthree'
        }, {
            id: 3,
            name: '边框动画',
            url: '../anims/animfour/animfour'
        }, {
            id: 4,
            name: '加载动画',
            url: '../anims/animfive/animfive'
        }]
    },
    onLoad: function () {

    },
    bindActive:function(e){
        var id = e.currentTarget.dataset.id;
        var list = this.data.list;
        var _length = list.length;
        for(var i = 0;i < _length;i++){
            if(id == list[i].id){
                wx.navigateTo({
                    url:list[i].url,
                })
            }
        }
    }
})
