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
      userId: 0,
      key: this.data.key,
      page: this.data.page,
      size: this.data.size
    }
    const res = await commentService.getPages(params)
    this.setData({
      data: res.data.list,
    })
  },
  onSearch() {
    if (this.data.key === '') {
      wx.showToast({
        title: 'Please input search content',
        icon: 'none'
      })
    }
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
  toUser(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../user/user?id=' + id
    })
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?cid=' + id
    })
  }
})