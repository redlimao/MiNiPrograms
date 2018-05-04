//index.js
Page({
    data: {
        list:[{
            id:0,
            name:'可滚动视图区域',
            url: '../module/scrollView/scrollView'
        }, {
            id:1,
            name: '三级联动',
            url: '../module/threePicker/threePicker'
        },{
            id:2,
            name: 'map组件',
            url: '../module/map/map'
        },{
            id: 3,
            name: 'swiper组件',
            url: '../module/swiper/swiper'
        }, {
            id: 4,
            name: 'movableArea组件',
            url: '../module/movableArea/movableArea'
        },{
            id:5,
            name:'icons组件',
            url:'../module/icons/icons'
        }, {
            id: 6,
            name: 'text组件',
            url: '../module/text/text'
        }, {
            id: 7,
            name: 'progress组件',
            url: '../module/progress/progress'
        }, {
            id: 8,
            name: 'button表单组件',
            url: '../module/button/button'
        }, {
            id: 9,
            name: 'checkbox表单组件',
            url: '../module/checkbox/checkbox'
        }, {
            id: 10,
            name: 'input表单组件',
            url: '../module/input/input'
        }, {
            id: 11,
            name: 'picker表单组件',
            url: '../module/picker/picker'
        }, {
            id: 12,
            name: 'radio表单组件',
            url: '../module/radio/radio'
        }, {
            id: 13,
            name: 'slider表单组件',
            url: '../module/slider/slider'
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
