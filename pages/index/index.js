// pages/index/index.js
const commentService = require('../../services/comment')
const constant = require('../../utils/constant')

Page({
  data: {
    list: [],
    key: '',
    page: 1,
    size: 5,
    showAction: false,
    hasMore: true,
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
    if (res.data.list.length > 0) {
      this.setData({
        list: this.data.list.concat(res.data.list)
      })
      if (res.data.list.length < this.data.size) {
        this.setData({
          hasMore: false
        })
      }
    } else {
      this.setData({
        hasMore: false
      })
    }
  },
  /**
   * 下拉刷新
   */
  onRefresh() {
    this.setData({
      list: [],
      page: 1,
      hasMore: true
    })
    this.load()
  },
  /**
   * 加载更多
   */
  loadMore() {
    if (this.data.hasMore) {
      this.setData({
        page: ++this.data.page
      })
      this.load()
    }
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