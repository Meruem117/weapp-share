// pages/index/index.js
const commentService = require('../../services/comment')
const constant = require('../../utils/constant')

Page({
  data: {
    data: [],
    key: '',
    page: 1,
    size: 3,
    showAction: false,
    icon: constant.ICON
  },
  onLoad: function () {
    this.load()
  },
  /**
   * 加载
   */
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
  /**
   * 搜索
   */
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
  /**
   * 搜索输入框监听
   * @param {Event} e 
   */
  onChange(e) {
    const value = e.detail
    this.setData({
      key: value,
      showAction: value !== ''
    })
  },
  /**
   * 取消搜索
   */
  onCancel() {
    this.setData({
      key: '',
      page: 1,
      showAction: false
    })
    this.load()
  },
  /**
   * 跳转用户详情
   * @param {Event} e 
   */
  toUser(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../user/user?id=' + id
    })
  },
  /**
   * 跳转分享详情
   * @param {Event} e 
   */
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?cid=' + id
    })
  }
})