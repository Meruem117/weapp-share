// pages/search/search.js
const util = require('../../utils/util.js')

Page({
  data: {
    feed: []
  },
  onLoad: function () {
    var that = this
  },
  returnToIndex: function () {
    wx.navigateBack()
  },
  sinput: function (e) {
    this.search(e.detail.value);
  },
  sconfirm: function (e) {
    this.search(e.detail.value);
  },
  search: function (key) {
    if (key == "") {
      This.setData({
        feed: [{
          content: "无搜索内容"
        }]
      })
    }
    var This = this;
    var s = util.getPlus();
    var arr = [];
    for (let i in s.data) {
      if (s.data[i].content.indexOf(key) >= 0 || s.data[i].tag.indexOf(key) >= 0) {
        arr.push(s.data[i]);
      }
    }
    if (arr.length == 0) {
      This.setData({
        feed: [{
          "user_img": "../../icon/ganga.png",
          "content": "无相关内容"
        }]
      })
    } else {
      This.setData({
        feed: arr
      })
    }
  },
  check: function (cid) {
    let aid = cid.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../detail/detail?cid=' + aid
    })
  },
  toUser: function (e) {
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '../user/user?uid=' + uid
    })
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      that.nextLoad();
    }, 1000);
    console.log("lower")
  }
})