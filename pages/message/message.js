// pages/message/message.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    id:0,
    name:"",
    feed:[],
    reply:[],
    hidden:true,
    focus:false,
    inputValue:'',
    i1:false,
    i2:false,
    i3:false,
    i4:false,
    i5:false
  },
  onLoad: function (options) {
    let id = options.id;
    let name = options.name;
    this.setData({
      id:id,
      name:name
    })
    this.refresh();
  },
  onShow: function () {

  },
  refresh: function(){
    var feed = util.getMessage();
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
    });
  },
  toUser: function (e) {
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '../user/user?uid=' + uid
    })
  },
  toMine:function(e){
    wx.switchTab({
      url: '../mine/mine',
    })
  },
  reply:function(e){
    var value = e.detail.value.content;
    this.setData({
      inputValue:value
    })
    var content = this.data.inputValue;
    this.setData({
      reply:[{
        "user_img": "../../images/icon.jpg",
        "content":content
      }]
    })
    this.setData({
      inputValue:''
    })
  },
  toClick:function(e){
    let i = e.currentTarget.dataset.i;
    if(i=='voice'){
      this.setData({
        i1:!this.data.i1,
        i2:false,
        i3:false,
        i4:false,
        i5:false
      })
    }else if(i=='picture'){
      this.setData({
        i1:false,
        i2:!this.data.i2,
        i3:false,
        i4:false,
        i5:false
      })
    }else if(i=='camera'){
      this.setData({
        i1:false,
        i2:false,
        i3:!this.data.i3,
        i4:false,
        i5:false
      })
    }else if(i=='face'){
      this.setData({
        i1:false,
        i2:false,
        i3:false,
        i4:!this.data.i4,
        i5:false
      })
    }else if(i=='add'){
      this.setData({
        i1:false,
        i2:false,
        i3:false,
        i4:false,
        i5:!this.data.i5
      })
    }
  }
})