// pages/user/user.js
const userService = require('../../services/user')
const commentService = require('../../services/comment')
const constant = require('../../utils/constant')

Page({
  data: {
    id: 0,
    page: 1,
    size: 3,
    total: 0,
    data: {},
    list: [],
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
    this.setData({
      list: res.data.list,
      total: res.data.total
    })
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