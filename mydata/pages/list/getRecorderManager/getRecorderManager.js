//list.js
var common = require('../../../utils/util.js');

//播放录音
// const backgroundAudioManager = wx.getBackgroundAudioManager();
Page({
    data: {
        flag:1,
        key:''
    },
    onLoad: function () {
        console.log(common.options);
        console.log(common.recorderManager);
        console.log(common.backgroundAudioManager);
    },
    //开始录音
    bindStartRecorde:function(){
        var that = this;
        //开始录音
        common.recorderManager.start(common.options);
        //开始录音返回值
        common.recorderManager.onStart(() => {
            
        });
    },
    //停止录音
    bindStopRecorde: function () {
        var that = this;
        common.recorderManager.onError((res) => {
            common.recorderManager.stop();
            wx.showToast({
                title: '录音失败',
                success: function () {
                    that.setData({
                        errMsg: res.errMsg
                    })
                }
            })
        })
        common.recorderManager.stop();

        //结束录音返回值
        common.recorderManager.onStop((res) => {
            console.log(res)
            const { tempFilePath } = res
            console.log('失败是八十哈哈哈'+that.data.errMsg)
            that.setData({
                key: tempFilePath
            })
            if (that.data.errMsg == undefined){
                wx.showToast({
                    title: '录音结束',
                    success: function () {
                        that.bindPaly();
                    }
                })
            }

        })
    },
    //播放音频
    bindPaly:function(e){
        console.log('播放的录音：'+this.data.key);
        //音频地址
        common.backgroundAudioManager.src = this.data.key;
        common.backgroundAudioManager.title = '此时此刻'
        //开始播放
        common.backgroundAudioManager.play();
        //开始播放返回值
        common.backgroundAudioManager.onPlay((res) => {
            wx.showLoading({
                title: '播放中',
            })
        });
        // //播放结束返回值
        common.backgroundAudioManager.onEnded((res) => {
            wx.hideLoading();
            wx.showToast({
                title: '播放录音结束',
            })
        })
    },
    //长按录音
    touchdown:function(e){
        console.log(e);
        this.setData({
            flag : 2
        })
        this.bindStartRecorde();
        
    },
    touchup: function (e) {
        console.log(123)
        var that = this;
        this.setData({
            flag: 1
        })
        that.bindStopRecorde(); 
    }
})
