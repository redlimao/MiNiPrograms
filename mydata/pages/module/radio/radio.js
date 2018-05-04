//radio.js

Page({
    data: {
       list:[{
            name:'apple',
            value:'苹果'
       },{
            name: 'banana',
            value: '香蕉'
        },{
            name: 'tangerine',
            value: '橘子'
        }]
    },
    onLoad: function () {

    },
    radioChange:function(e){
        var list = this.data.list;
        var current_value = e.detail.value;
        console.log(current_value)
        for(var i = 0;i < list.length;i++){
            if (current_value.indexOf(list[i].name) !== -1){
                list[i].checked = true
            }else{
                list[i].checked = false
            }
        }
        this.setData({list:list})
    }

})
