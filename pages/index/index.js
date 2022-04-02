// pages/index/index.js
const commentService = require('../../services/comment')

Page({
  data: {
    data: [],
    key: '',
    showAction: false,
    image: {
      like: '../../icon/like.png',
      like_: '../../icon/like_.png',
      comment: '../../icon/comment.png',
      collect: '../../icon/collect.png',
      collect_: '../../icon/collect_.png'
    }
  },
  onLoad: function () {
    this.load()
  },
  load() {
    const data = commentService.getAll()
    this.setData({
      data: data,
    })
    console.log(this.data.data)
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?cid=' + id
    })
  },
  toLike(e) {
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
  toUser(e) {
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '../user/user?uid=' + uid
    })
  },
  toCollect(e) {
    let collect = e.currentTarget.dataset.collect;
    let id = e.currentTarget.dataset.id - 1;
    this.setData({
      ['feed[' + id + '].iscollect']: !collect
    })
  },
  toComment(e) {
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
  }
})