//list.js

Page({
    data: {
      
    },
    onLoad: function () {

    },
    bindChooseGPS:function(){
        var that = this;
        var address1 = this.data.address1;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                wx.chooseLocation({
                    success: function (res) {
                        that.setData({
                            address1: res.address
                        })
                    },
                })  
            }
        })
 
    }, 
    bindOpenGPS: function () {
        var that = this;
        var address2 = this.data.address2;
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res){
                console.log(res);
                var latitude = res.latitude
                var longitude = res.longitude
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 28,
                    address:'陕西省渭南市',
                    success: function (res) {
                        that.setData({
                            address2: res.address
                        })
                    },
                })                 
            },
        })
    },   
})
