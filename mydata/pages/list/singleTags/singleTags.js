//list.js

Page({
    data: {
        tags_1: [{name:'好吃',flag:1},{name:'懒做',flag:1},{name:'好睡',flag:1},{name:'嘤嘤嘤',flag:1}],
        tags_array:''
    },
    onLoad: function () {

    },
    //多选标签
    bindTags:function(e){
        var tags = this.data.tags_1;
        var index = e.currentTarget.dataset.id;
        for(var i = 0;i < tags.length;i++){
            tags[i].flag = 1;
        }
        if(tags[index].flag == 1){
            tags[index].flag = 2;
        }
        this.setData({
            tags_1:tags
        })
    },
    //将多选标签的值打印出来
    bindTagsName:function(){
        var tags_array = this.data.tags_array;
        var tags = this.data.tags_1;

        for (var i = 0; i < tags.length; i++) {
            if (tags[i].flag == 2) {
                tags_array = tags[i].name;
            }
        }

        this.setData({
            tags_array: tags_array
        })
    }
})
