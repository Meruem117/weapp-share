var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    date:"",
    i1:false,
    i2:false,
    i3:false,
    i4:false,
    i5:false
  },
  onLoad: function (options) {
    var date = util.formatTime(new Date())
    this.setData({
      date:date
    })
  },
  publish:function(e){
    var date = this.data.date;
    var content=e.detail.value.content;
    var pages = getCurrentPages();
    var prepage = pages[pages.length-2];
    prepage.setData({
      moreRecord:[
        {
          "record_id":3,
          "time":date,
          "content":content,
          "show":true
        }
      ]
    })
    wx.navigateBack({
      delta: 0,
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