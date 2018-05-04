//list.js

Page({
    data: {
        count_time:'',
        time:'',
        nowtime:0
    },
    onLoad: function () {
        this.countDown();
        // var nowtime = this.data.nowtime;
        // nowtime = new Date();
        // nowtime = parseFloat(nowtime.getTime());
        // this.setData({
        //     nowtime : nowtime
        // })
    },
    countDown:function(){
        var that = this;
        var ordertime = 900000; 
        console.log(ordertime)
        if(ordertime >= 0){
            var time = setInterval(function () {
                // var nowtime = that.data.nowtime;//获取当前时间
                // console.log(nowtime)
                // var time_ = nowtime - ordertime;//剩余时间单位ms
                ordertime = ordertime - 1000;
                console.log(ordertime);
                var time_have = Math.abs(ordertime) / 1000;
                var timeH = parseInt(Math.abs(time_have) / 60 / 60);//小时
                var timeM = parseInt(Math.abs(time_have) / 60 % 60);    //分钟
                var timeS = parseInt(Math.abs(time_have) % 60);         //秒钟
                console.log(time_have,timeH, timeM, timeS);
                var count_time = timeH + ':' + timeM + ':' + timeS;
                // that.countDown();
                that.setData({
                    count_time: count_time
                })
            }, 1000);
        }

    }
})
