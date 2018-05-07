//index.js
Page({
    data: {
        list:[{
            id:0,
            name:'动画',
            url:'../canvass/animation/animation'
        }, {
            id: 1,
            name: '位置',
            url: '../canvass/position/position'
        }, {
            id: 2,
            name: 'canvas_1',
            url: '../canvass/canvas_1/canvas_1'
        },{
            id: 3,
            name: 'canvasDrawImage',
            url: '../canvass/canvasDrawImage/canvasDrawImage'
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
