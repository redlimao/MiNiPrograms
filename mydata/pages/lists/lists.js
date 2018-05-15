//index.js
Page({
    data: {
        list:[{
            id:0,
            name:'多选标签',
            url:'../list/tags/tags'
        },{
            id: 1,
            name: '单选标签',
            url: '../list/singleTags/singleTags'
        },{
            id:2,
            name:'星级评价',
            url: '../list/star/star'
        },{
            id:3,
            name: '倒计时',
            url: '../list/countDown/countDown'
        },{
            id:4,
            name: '左滑删除',
            url:'../list/leftDelete/leftDelete'
        },{
            id:5,
            name:'定位',
            url:'../list/location/location'
        },{
            id: 6,
            name: '录音',
            url: '../list/getRecorderManager/getRecorderManager'
        }, {
            id: 7,
            name: '图片',
            url: '../list/images/images'
        }, {
            id: 8,
            name: '选项卡',
            url: '../list/menus/menus'
        }, {
            id: 9,
            name: '弹窗',
            url: '../list/pop/pop'
        }, {
            id: 10,
            name: '摇一摇',
            url: '../list/shake/shake'
        }, {
            id: 11,
            name: '数据缓存',
            url: '../list/storag/storag'
        }, {
            id: 12,
            name: '多图片上传',
            url: '../list/uploadImg/uploadImg'
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
