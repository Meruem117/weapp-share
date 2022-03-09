// pages/user/user.js
const util = require('../../utils/util.js')

Page({
  data: {
    feed: [],
    feed_length: 0,
    user: [],
    uid: ''
  },
  onLoad: function (options) {
    let uid = options.uid;
    this.setData({
      uid: uid
    })
    //调用应用实例的方法获取全局数据
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
  refresh: function () {
    var feed = util.getPlus();
    var user = util.getUser();
    var user_data = user.data;
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length,
      user: user_data
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
  toCollect: function (e) {
    let collect = e.currentTarget.dataset.collect;
    let id = e.currentTarget.dataset.id - 1;
    this.setData({
      ['feed[' + id + '].iscollect']: !collect
    })
  },
  // toComment: function (c) {
  //   wx.navigateTo({
  //     url: '../comment/comment'
  //   })
  // },
  toComment: function (e) {
    let tp = e.currentTarget.dataset.tp;
    let aid = e.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../detail/detail?tp=' + tp + '&cid=' + aid
    })
  },
  bindContentTap: function (cid) {
    let aid = cid.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../detail/detail?cid=' + aid
    })
  },
  toMessage: function (e) {
    let id = e.currentTarget.dataset.id;
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../message/message?id=' + id + '&name=' + name
    })
  }
})