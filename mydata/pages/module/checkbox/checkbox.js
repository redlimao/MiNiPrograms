//checkbox.js

Page({
    data: {
        list: [
            { name: '苹果', checked: true },
            { name: '香蕉', checked: true },
            { name: '葡萄' },
        ]       
    },
    onLoad: function () {

    },
    checkboxChange:function(e){
        var checked = e.detail.value;
        console.log(e);
        var list = this.data.list;
        var changed = {};
        for(var i = 0;i < list.length;i++){
            if (checked.indexOf(list[i].name) !== -1){
                console.log(list[i].name)
                list[i].checked = true  
                // changed['list[' + i + '].checked'] = true
            }else{
                list[i].checked = false
                // changed['list[' + i + '].checked'] = false
            }
        }
        this.setData({
            list:list
        })
        console.log(this.data.list);
    },
    bindSubmit:function(e){
        console.log(e);
    }
})
