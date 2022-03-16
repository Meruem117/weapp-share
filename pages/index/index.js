// pages/index/index.js
const util = require('../../utils/util.js')

Page({
  data: {
    feed: [],
    feed_length: 0,
    key: '',
    showAction: false
  },
  onLoad: function () {
    this.load();
  },
  bindContentTap: function (cid) {
    let aid = cid.currentTarget.dataset.cid
    wx.navigateTo({
      url: '../detail/detail?cid=' + aid
    })
  },
  load: function () {
    const feed = util.getPlus()
    const feed_data = feed.data
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    })
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
  },
  onSearch() {
    console.log(this.data.key)
  },
  onChange(e) {
    const value = e.detail
    this.setData({
      key: value,
      showAction: value !== ''
    })
  },
  onCancel() {
    this.setData({
      key: '',
      showAction: false
    })
  },
})