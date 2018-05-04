//leftDelete.js

Page({
    data: {
        list:[{
            id:0,
            translateX:0
        }, {
            id: 1,
            translateX: 0
        }, {
            id: 2,
            translateX:0
        }, {
            id: 3,
            translateX:0
        }, {
            id: 4,
            translateX:0
        }, {
            id: 5,
            translateX:0
        }],
        startX :0,
        moveX:0,
        delBtnWidth:100,
    },
    onLoad: function () {
        var that = this;
        wx.createSelectorQuery().select('.contain').boundingClientRect(function (rect) {
            console.log(rect);
        }).exec()
    },
    touchS:function(e){ 
        //判断是否只有一个触摸点
        if (e.changedTouches.length == 1) {
            this.setData({
                //记录触摸起始位置的X坐标
                startX: e.changedTouches[0].clientX
            });
        }
    },
    touchM:function(e){
        if (e.changedTouches.length == 1) {
            var id = e.currentTarget.dataset.id;
            var list = this.data.list; 
            //记录触摸点位置的X坐标
            var moveX = e.changedTouches[0].clientX;
            //计算手指起始点的X坐标与当前触摸点的X坐标的差值
            var disX = this.data.startX - moveX;
            //delBtnWidth 为右侧按钮区域的宽度
            var delBtnWidth = this.data.delBtnWidth;
            if (disX == 0 || disX < 0) {
                list[id].translateX = 0;
            } else if (disX > 0) {
                //移动距离大于0，文本层left值等于手指移动距离
                list[id].translateX = disX;
                if (disX >= delBtnWidth) {
                    //控制手指移动距离最大值为删除按钮的宽度
                    list[id].translateX = delBtnWidth;
                }
            }
            this.setData({
                list : list 
            })
        }
    },
    touchE:function(e){
        if (e.changedTouches.length == 1) {
            var id = e.currentTarget.dataset.id;
            var list = this.data.list; 
            var endX = e.changedTouches[0].clientX;
            //计算手指起始点的X坐标与当前触摸点的X坐标的差值
            var disX = this.data.startX - endX;
            var delBtnWidth = this.data.delBtnWidth;
            if (disX <= delBtnWidth / 2) {
                list[id].translateX = 0;
            } else {
                list[id].translateX = delBtnWidth;
            }
            this.setData({
                list: list
            })
        }
    },
    bindDelete:function(e){
        var id = e.cuurentTarget.dataset.id;
        var list = this.data.list;
        if(id == list[id].id){
            list.splice(id, 1);
            this.setData({
                list: list
            })
        }

    }
})
