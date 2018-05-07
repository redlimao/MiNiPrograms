//canvasDrawImage.js
Page({
    data: {
        x:0,
        y:0, //裁剪区域左上角坐标
        slide:false //滑动开关
    },
    onLoad: function () {
        var that = this;
        var ctx = wx.createCanvasContext('myCanvas_1');
        //选择图片
        wx.chooseImage({
            success: function (res) {
                //获取图片大小
                wx.getImageInfo({
                    src: res.tempFilePaths[0],
                    success: function (ress) {
                        var num = ress.width/ress.height;
                        ctx.drawImage(res.tempFilePaths[0], 0, 0, 375, parseInt(375/num));
                        ctx.setFillStyle('rgba(0,0,0,0.3)');
                        ctx.fillRect(that.data.x,that.data.y, 200, 200);
                        ctx.draw();
                    }
                })
            }
        })
    },
    bindGetImg:function(){
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: 375,
                    height: 500,
                    destWidth: 375,
                    destHeight: 500,
                    canvasId: 'myCanvas_1',
                    success: function (res) {
                        that.setData({
                            img: res.tempFilePath
                        })
                        console.log(res.tempFilePath)
                    }
                })
            },
        })
    },
    bindStart:function(e){
        ctx.clearRect(this.data.x, this.data.y, 200, 200)
        ctx.draw()
        var x = e.touches[0].x;
        var y = e.touches[0].y;
        // if()
    }
    
})
