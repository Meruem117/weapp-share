// pages/index/index.js
const commentService = require('../../services/comment')

Page({
  data: {
    data: [],
    key: '',
    page: 1,
    size: 3,
    showAction: false,
    image: {
      like: '../../icon/like.png',
      like_: '../../icon/like_.png',
      comment: '../../icon/comment.png'
    }
  },
  onLoad: function () {
    this.load()
  },
  async load() {
    let params = {
      key: this.data.key,
      page: this.data.page,
      size: this.data.size
    }
    const res = await commentService.getSearchPages(params)
    this.setData({
      data: res.data.list,
    })
  },
  onSearch() {
    this.setData({
      page: 1
    })
    this.load()
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
      page: 1,
      showAction: false
    })
    this.load()
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?cid=' + id
    })
  },
  toUser(e) {
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '../user/user?uid=' + uid
    })
  },
  toComment(e) {
    let tp = e.currentTarget.dataset.tp;
    let aid = e.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../detail/detail?tp=' + tp + '&cid=' + aid
    })
  },
})