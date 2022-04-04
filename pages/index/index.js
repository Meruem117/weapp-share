// pages/index/index.js
const commentService = require('../../services/comment')
const constant = require('../../utils/constant')

Page({
  data: {
    data: [],
    key: '',
    page: 1,
    size: 4,
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
      commentId: 0,
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
   * @param {{detail: string}} e 
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
   * @param {{detail: number}} e 
   */
  toUser(e) {
    const id = e.detail
    wx.navigateTo({
      url: '../user/user?id=' + id
    })
  },
  /**
   * 跳转分享详情
   * @param {{detail: number}} e 
   */
  toDetail(e) {
    const id = e.detail
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  }
})