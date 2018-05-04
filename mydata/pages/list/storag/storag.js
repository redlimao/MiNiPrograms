//storag.js

Page({
    data: {
        flag_load1:false,
        flag_load2: false,
        array : []
    },
    onLoad: function () {

    },
    bindSubmit:function(e){
        var that = this;
        var content = e.detail.value.name;
        var array = this.data.array;
        if(content == ""){
            wx.showToast({
                title: '内容不能为空',
                icon:'none'
            })
        }else{
            if (array.indexOf(content) == -1) {
                array.push(content);
            }
            wx.setStorage({
                key: "key",
                data: array,
                success: function () {
                    wx.getStorage({
                        key: 'key',
                        success: function(res) {
                            console.log(res);
                            wx.showToast({
                                title: '存储成功',
                                success: function () {
                                    that.setData({
                                        array: res.data
                                    })

                                }
                            })
                        },
                    })

                }
            })
        }

    },
    bindDelete:function(){
        var that = this;
        var array = this.data.array;
        if(array.length == 0){
            wx.showToast({
                title: '数据为空',
                icon:'none'
            })
        }else{
            array.splice(0,array.length);
            wx.removeStorage({
                key: 'key',
                success: function (res) {
                    wx.showToast({
                        title: '删除成功',
                        success:function(){
                            that.setData({
                                array: array
                            })
                        }
                    })
                }
            })
        }
    }


})
