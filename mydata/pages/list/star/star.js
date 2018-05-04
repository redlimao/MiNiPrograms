//list.js

Page({
    data: {
        star: [{flag:1},{flag:1},{flag:1},{flag:1},{flag:1}],
        star_select:0
    },
    onLoad: function () {

    },
    //星级评级
    bindStar:function(e){
        var star = this.data.star;
        var index = e.currentTarget.dataset.id;
        console.log(index);
        for(var i = 0;i < star.length;i++){
            if(index >= i){
                star[i].flag = 2
            }else{
                star[i].flag = 1
            }
        }
        this.setData({
            star:star,
            star_select:index+1
        })
    }
})
