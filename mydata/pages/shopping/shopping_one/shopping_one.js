//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        shops : [
          {
            id: 0,
            shop_tit:"西安博智企业营销",
            list_selects:false,
            shop_context:[
              {
                shop_imgUrl:"../../../images/img-1.jpg",
                shop_ctit:"五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒",
                shop_numbers:4,
                shop_money:1000,
                shop_cutmoney:888,
                selected:false
              },
              {
                shop_imgUrl:"../../../images/img-1.jpg",
                shop_ctit:"五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒",
                shop_numbers: 4,
                shop_money: 1000,
                shop_cutmoney: 888,
                selected: false
              },
              {
                shop_imgUrl:"../../../images/img-1.jpg",
                shop_ctit:"五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒",
                shop_numbers: 4,
                shop_money: 1000,
                shop_cutmoney: 888,
                selected: false
              }
            ]
          },
          {
            id: 1,
            shop_tit: "西安博智企业营销",
            list_selects: false,
            shop_context: [
              {
                shop_imgUrl: "../../../images/img-1.jpg",
                shop_ctit: "五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒",
                shop_numbers: 4,
                shop_money: 1000,
                shop_cutmoney: 888,
                selected: false
              },
              {
                shop_imgUrl: "../../../images/img-1.jpg",
                shop_ctit: "五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒",
                shop_numbers: 4,
                shop_money: 1000,
                shop_cutmoney: 888,
                selected: false
              },
              {
                shop_imgUrl: "../../../images/img-1.jpg",
                shop_ctit: "五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒五星老酒",
                shop_numbers: 4,
                shop_money: 1000,
                shop_cutmoney: 888,
                selected: false
              }
            ]
          }
        ],
        all_money : 0,
        list_selectAll : false
    },
    //商品选中
    bindSingleSelect: function (e) {
        var index = e.currentTarget.dataset.index;  //获取商铺id
        var id = e.currentTarget.dataset.id;        //获取商品id
        var shops = this.data.shops;                //获取整个数据
        var selected = shops[index].shop_context[id].selected;
        var list_selectAll = this.data.list_selectAll;
        shops[index].shop_context[id].selected = !selected;
        //循环所点击商铺下的商品是否全部选中
        var n = 0;
        for(var i = 0;i < shops[index].shop_context.length;i++){
            if(shops[index].shop_context[i].selected){
                n++;
            }
        }
        if(n == shops[index].shop_context.length){
            shops[index].list_selects = true
        }else{
            shops[index].list_selects = false
        }
        //循环判断所有商铺都是否选中
        var m = 0;
        for(var i = 0;i < shops.length;i++){
            if(shops[i].list_selects){
                m++;
            }
        }
        if(m == shops.length){
            list_selectAll = true
        }else{
            list_selectAll = false
        }
        //重新赋值
        this.setData({
            shops:shops,
            list_selectAll:list_selectAll 
        })
        this.totalPrice();

    },
    //商铺选中
    selectAll: function (e) {
        var index = e.currentTarget.dataset.index;
        var shops = this.data.shops;                //获取整个数据
        var list_selects = shops[index].list_selects;
        shops[index].list_selects = !list_selects;
        var list_selectAll = this.data.list_selectAll;
        for(var i = 0;i <shops[index].shop_context.length;i++){
            shops[index].shop_context[i].selected = shops[index].list_selects
        }
        var n = 0;
        for(var i = 0;i <shops.length;i++){
            if (shops[i].list_selects){
                n++
            }
        }
        if(n == shops.length){
            list_selectAll = true
        }else{
            list_selectAll = false
        }
        this.setData({
            shops : shops,
            list_selectAll: list_selectAll
        })
        this.totalPrice();
    },
    //全选
    selectAlls:function(e){
        var shops = this.data.shops;                //获取整个数据
        var list_selectAll = this.data.list_selectAll;
        list_selectAll = !list_selectAll;
        for(var i = 0;i <shops.length;i++){
            shops[i].list_selects = list_selectAll
            for(var j = 0;j <shops[i].shop_context.length;j++){
                shops[i].shop_context[j].selected = list_selectAll
            }
        }
        this.setData({
            shops: shops,
            list_selectAll: list_selectAll
        })
        this.totalPrice();
    },
    totalPrice:function(){
        var all_money = this.data.all_money;
        var shops = this.data.shops;
        var total = 0;
        for(var i = 0;i < shops.length;i++){
            for(var j = 0;j < shops[i].shop_context.length;j++){
                if(shops[i].shop_context[j].selected){
                    total += shops[i].shop_context[j].shop_money
                }
               
            }
        }
        all_money = total;

        this.setData({
            all_money: all_money,
            shops:shops
        })
    },
    onLoad: function () {
        if(app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })    
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
            success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
