// pages/user/user.js
const userService = require('../../services/user')
const commentService = require('../../services/comment')
const constant = require('../../utils/constant')

Page({
  data: {
    id: 0,
    page: 1,
    size: 4,
    data: {},
    list: [],
    total: 0,
    hasMore: true,
    gender: constant.GENDER,
    icon: constant.ICON
  },
  onLoad: function (option) {
    this.setData({
      id: option.id
    })
    this.loadUserInfo()
    this.loadCommentList()
  },
  /**
   * 加载用户信息
   */
  async loadUserInfo() {
    const res = await userService.getUserById(this.data.id)
    this.setData({
      data: res.data
    })
  },
  /**
   * 加载分享列表
   */
  async loadCommentList() {
    let params = {
      userId: this.data.id,
      commentId: 0,
      key: '',
      page: this.data.page,
      size: this.data.size
    }
    const res = await commentService.getPages(params)
    if (res.data.list.length > 0) {
      this.setData({
        list: this.data.list.concat(res.data.list),
        total: res.data.total,
        hasMore: res.data.total > this.data.size && res.data.list.length === this.data.size
      })
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
      total: 0,
      page: 1,
      hasMore: true
    })
    this.loadCommentList()
  },
  /**
   * 加载更多
   */
  loadMore() {
    if (this.data.hasMore) {
      this.setData({
        page: ++this.data.page
      })
      this.loadCommentList()
    }
  },
  /**
   * 跳转聊天框
   */
  toMessage() {
    wx.navigateTo({
      url: '../message/message?id=' + this.data.id
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