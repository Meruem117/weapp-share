// pages/plus/plus.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    feed:[],
    feed_length: 0,
    publish:[]
  },
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  onShow: function(options){
    var pages = getCurrentPages();
    var curpage = pages[pages.length-1];
  },
  refresh: function(){
    var feed = util.getPublish();
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length: feed_data.length
    });
  },
  bindContentTap: function(cid) {
    let aid = cid.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../mydetail/mydetail?cid='+aid
    })
  },
  toLike:function(e){
    let like = e.currentTarget.dataset.like;
    let id = e.currentTarget.dataset.id-1;
    let num = e.currentTarget.dataset.num;
    if(like==false){
      this.setData({
        ['feed[' + id + '].good_num']: num+1
      })
    }else if(like==true){
      this.setData({
        ['feed[' + id + '].good_num']: num-1
      })
    }
    this.setData({
      ['feed[' + id + '].islike']: !like
    })
  },
  toCollect:function(e){
    let collect = e.currentTarget.dataset.collect;
    let id = e.currentTarget.dataset.id-1;
    this.setData({
      ['feed[' + id + '].iscollect']: !collect
    })
  },
  toUser:function(e){
    wx.switchTab({
      url: '../mine/mine',
    })
  },
  delete:function(e){
    let show = e.currentTarget.dataset.show;
    let sid = e.currentTarget.dataset.sid-1;
    if(show==true){
      this.setData({
        ['feed[' + sid + '].show']: false 
      })
    }
  },
  deleteP:function(e){
    let show = e.currentTarget.dataset.show;
    if(show==true){
      this.setData({
        ['publish.show']: false 
      })
    }
  },
  // toComment:function(c){
  //   wx.navigateTo({
  //     url: '../comment/comment'
  //   })
  // },
  toComment:function(e){
    let tp = e.currentTarget.dataset.tp;
    let aid = e.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../mydetail/mydetail?tp='+tp+'&cid='+aid
    })
  }
})