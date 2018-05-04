//picker.js

Page({
    data: {
        general: ['apple', 'banana','tangerine'],
        index_1:0,
        eating:[['早餐','午餐','晚餐'],['包子','油条','油茶']],
        eatIndex:[0,0],
        date: '2016-09-01',
        time: '12:01',
    },
    onLoad: function () {

    },
    bindPickerChange1:function(e){
        this.setData({
            index_1:e.detail.value
        })
    },
    bindPickerChange2:function(e){
        var index = e.detail.value;
        this.setData({
            eatIndex: e.detail.value
        })
        console.log(e);
    },
    bindColumnChange:function(e){
        // console.log(e.detail.column, e.detail.value)
        var data = {
            eatIndex: this.data.eatIndex,
            eating: this.data.eating
        }
        data.eatIndex[e.detail.column] = e.detail.value;
        console.log(data.eatIndex)
        switch (e.detail.column){
            case 0:
                switch (data.eatIndex[0]){
                    case 0:
                        data.eating[1] = ['包子', '油条', '油茶'];
                        break;
                    case 1:
                        data.eating[1] = ['盖浇饭', '炒饭'];
                        break;
                    case 2:
                        data.eating[1] = ['面条', '饺子'];
                        break;
                }
                data.eatIndex[1] = 0;
                break;
            case 1:
        }
        this.setData(data)
    },
    //时间选择器
    bindTimeChange:function(e){
        this.setData({
            time : e.detail.value
        })
    },
    //日期选择器
    bindDateChange:function(e){
        this.setData({
            date: e.detail.value
        })        
    }

})
