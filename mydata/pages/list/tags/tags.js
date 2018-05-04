//list.js

Page({
    data: {
        tags: [{name:'好吃',flag:1},{name:'懒做',flag:1},{name:'好睡',flag:1},{name:'嘤嘤嘤',flag:1}],
        tags_array:''
    },
    onLoad: function () {

    },
    //多选标签
    bindTags:function(e){
        console.log(e);
        var tags = this.data.tags;
        var index = e.currentTarget.dataset.id;
        if(tags[index].flag == 1){
            tags[index].flag = 2;
        }else{
            tags[index].flag = 1;
        }
        this.setData({
            tags:tags
        })
        console.log(tags);
    },
    //将多选标签的值打印出来
    bindTagsName:function(){
        var tags_array = this.data.tags_array;
        var tags = this.data.tags;
        var tags_arrays = [];

        for (var i = 0; i < tags.length; i++) {
            if (tags[i].flag == 2) {
                tags_arrays.push(tags[i].name);
            }
        }

        this.setData({
            tags_array: tags_arrays.join(",")
        })
    }
})
