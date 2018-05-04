//map.js

Page({
    data: {
        markers: [{
            iconPath: "../../../images/add.png",
            id: 0,
            latitude: 34.21726462204803,
            longitude: 108.89206999999998,
            width: 20,
            height: 20,
            alpha:0.5
        }],
        polyline: [{
            points: [{
                longitude: 108.89206999999998,
                latitude: 34.21726462204803
            },{
                longitude: 108.8897700000,
                latitude: 34.27738789505702
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true,
            arrowLine:true
        }],
        controls: [{
            id: 1,
            iconPath: '/resources/location.png',
            position: {
                left: 0,
                top: 300 - 50,
                width: 50,
                height: 50
            },
            clickable: true
        }]
    },
    regionchange:function(e) {
        console.log(e.type)
    },
    markertap: function(e) {
        console.log(e.markerId)
    },
    controltap: function(e) {
        console.log(e.controlId)
    }
})
