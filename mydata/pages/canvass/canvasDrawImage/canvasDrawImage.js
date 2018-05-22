//canvasDrawImage.js
Page({
    data: {
        canvas_img:'',
        x:0,
        y:0, //裁剪区域左上角坐标
        slide:false, //滑动开关
    },
    onLoad: function () {
        var that = this;
        var canvas_1 = wx.createCanvasContext('myCanvas_1');
        // 获取屏幕的可使用窗口高度和宽度
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    windowWidth: res.windowWidth,
                    windowHeight : res.windowHeight
                })
            }
        })
        this.setData({
            canvas_1: canvas_1
        })
        //选择图片
        wx.chooseImage({
            success: function (res) {
                //获取图片大小
                wx.getImageInfo({
                    src: res.tempFilePaths[0],
                    success: function (ress) {
                        // num为图片宽度和高度的比例
                        var num = ress.width/ress.height;
                        that.setData({
                            canvas_img: res.tempFilePaths[0],
                            num: num,
                            pic_height: parseInt(375 / num),
                            pic_width: 375
                        })
                        canvas_1.drawImage(res.tempFilePaths[0], 0, 0, 375, parseInt(375/num));
                        canvas_1.setFillStyle('rgba(0,0,0,0.5)');
                        canvas_1.fillRect(that.data.x, that.data.y, 375, 375);
                        canvas_1.draw();
                    }
                })
            }
        })
    },
    //开始滑动
    bindStart:function(e){
        //获取裁剪区域坐标
        var x_min = this.data.x;
        var y_min = this.data.y;
        var x_max = this.data.windowWidth + x_min;
        var y_max = this.data.windowWidth + y_min;
        //获取起始坐标值
        var x = e.touches[0].x;
        var y = e.touches[0].y;
        this.setData({
            x_touch_cur : x,
            y_touch_cur : y
        })
        console.log(this.data.y_touch_cur);
        // 如果起始坐标在裁剪区域内，则裁剪区域开启滑动
        if((x_min < x && x < x_max) && (y_min < y && y < y_max)){
            this.setData({slide:true})
        }else{
            this.setData({slide:false})
        }
        console.log(e);
    },
    //滑动中
    bindMove:function(e){
        var that = this;
        console.log(this.data.x_touch_cur, this.data.y_touch_cur)
        if(this.data.slide){
            var canvas_1 = this.data.canvas_1;
            var x_min = this.data.x;
            var y_min = this.data.y;
            //获取滑动坐标值
            var x_touch = e.touches[0].x;
            var y_touch = e.touches[0].y;
            //获取每次滑动获得的差值
            var x_cut = x_touch - this.data.x_touch_cur;
            var y_cut = y_touch - this.data.y_touch_cur;
            //把使用过的坐标值覆盖初始化的x_touch_cur和y_touch_cur
            // console.log(this.data.y_touch_cur, e.touches[0].y, y_cut);
            this.setData({
                x_touch_cur: x_touch,
                y_touch_cur: y_touch
            })
            console.log(y_cut);
            console.log(e);
            if(y_cut >= 0){
                var add_num = 3
            }else{
                var add_num = -3
            }
            var flag_height = this.data.pic_height;
            if (flag_height > this.data.windowHeight){
                flag_height = this.data.windowHeight
            }

            canvas_1.drawImage(that.data.canvas_img, 0, 0, 375, parseInt(375 / that.data.num));
            canvas_1.setFillStyle('rgba(0,0,0,0.5)');
            if(y_min < 0){
                y_min = 0
            } else if (y_min >= 0 && y_min <= flag_height - 375){
                y_min = y_min + add_num;
            } else if (y_min > flag_height - 375){
                y_min = flag_height - 375;
            }
            canvas_1.fillRect(that.data.x, y_min, that.data.windowWidth, that.data.windowWidth);
            canvas_1.draw();
            this.setData({
                y: y_min
            })
        }
    },
    //滑动结束
    bindEnd:function(){
        
    },
    bindGetImg: function () {
        var that = this;
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
            }
        })
    }
})
