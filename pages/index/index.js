// pages/index/index.js
const util = require('../../utils/util.js')

Page({
  data: {
    feed: [],
    feed_length: 0
  },
  bindContentTap: function (cid) {
    let aid = cid.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../detail/detail?cid=' + aid
    })
  },
  onLoad: function () {
    var that = this
    this.refresh();
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
  },
  //网络请求数据, 实现首页刷新
  refresh0: function () {
    var index_api = '';
    util.getData(index_api)
      .then(function (data) {
        console.log(data);
      });
  },
  refresh: function () {
    var feed = util.getPlus();
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },
  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
    var next = util.getPlus();
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  },
  toLike: function (e) {
    let like = e.currentTarget.dataset.like;
    let id = e.currentTarget.dataset.id - 1;
    let num = e.currentTarget.dataset.num;
    if (like == false) {
      this.setData({
        ['feed[' + id + '].good_num']: num + 1
      })
    } else if (like == true) {
      this.setData({
        ['feed[' + id + '].good_num']: num - 1
      })
    }
    this.setData({
      ['feed[' + id + '].islike']: !like
    })
  },
  toUser: function (e) {
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '../user/user?uid=' + uid
    })
  },
  toCollect: function (e) {
    let collect = e.currentTarget.dataset.collect;
    let id = e.currentTarget.dataset.id - 1;
    this.setData({
      ['feed[' + id + '].iscollect']: !collect
    })
  },
  toComment: function (e) {
    let tp = e.currentTarget.dataset.tp;
    let aid = e.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../detail/detail?tp=' + tp + '&cid=' + aid
    })
  }
})