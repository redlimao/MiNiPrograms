//canvas_1.js

Page({
    data: {
        x:0,
        y:0,
        width:0,
        height:0,
        hidden:true
    },
    onLoad: function () {
        var x = this.data.x;
        var y = this.data.y;
        var width = this.data.width;
        var height = this.data.height;

        var canvas_1 = wx.createCanvasContext('myCanvas_1', this);
        canvas_1.setFillStyle('red');
        canvas_1.setStrokeStyle('green');
        canvas_1.setShadow(5, 5, 100,'blue');
        canvas_1.strokeRect(10,10,100,100);
        canvas_1.fillRect(10,10,100,100);
        canvas_1.draw();
        
        //渐变
        var canvas_3 = wx.createCanvasContext('myCanvas_3', this);
        var grd_1 = canvas_3.createLinearGradient(0, 0, 200, 0);
        grd_1.addColorStop(0, 'red');
        grd_1.addColorStop(1, 'white');

        canvas_3.setFillStyle(grd_1);
        canvas_3.fillRect(10, 10, 150, 80);
        canvas_3.draw();

        var canvas_4 = wx.createCanvasContext('myCanvas_4');
        var grd_2 = canvas_4.createCircularGradient(75, 50, 50);
        grd_2.addColorStop(0,'red');
        grd_2.addColorStop(1,'white');
        canvas_4.setFillStyle(grd_2);
        canvas_4.fillRect(0, 0, 150, 100);
        canvas_4.draw();

        //线条
        var canvas_5 = wx.createCanvasContext('myCanvas_5', this);
        canvas_5.beginPath();
        canvas_5.setLineWidth(10);
        canvas_5.setLineCap('butt');
        canvas_5.setLineJoin('round');
        canvas_5.moveTo(10,10);
        canvas_5.lineTo(100,10);
        canvas_5.lineTo(100,100);
        canvas_5.stroke();

        canvas_5.beginPath();
        canvas_5.setLineWidth(10);
        canvas_5.setLineCap('butt');
        canvas_5.setLineJoin('round');
        canvas_5.moveTo(80, 30);
        canvas_5.lineTo(80, 120);
        canvas_5.lineTo(180, 120);
        canvas_5.stroke();
        canvas_5.draw();
    },
    bindStart:function(e){
        this.setData({
            hidden : false,
            x:e.touches[0].x,
            y: e.touches[0].y
        })
    },
    bindMove:function(e){
        var x = this.data.x;
        var y = this.data.y;
        this.setData({
            hidden: false,
            width: e.touches[0].x -x,
            height: e.touches[0].y - y
        })
        var canvas = wx.createCanvasContext('myCanvas_2', this);
        canvas.setFillStyle('red');
        canvas.fillRect(x, y, this.data.width, this.data.height);
        canvas.draw();
    },
    bindEnd:function(e){
        this.setData({
            hidden: true
        })
    }
})
