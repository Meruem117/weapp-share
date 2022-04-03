// pages/user/user.js
const userService = require('../../services/user')
const commentService = require('../../services/comment')
const constant = require('../../utils/constant')

Page({
  data: {
    id: '',
    page: 1,
    size: 3,
    total: 0,
    data: {},
    list: [],
    gender: constant.GENDER,
    icon: constant.ICON
  },
  onLoad: function (options) {
    const id = options.id;
    this.setData({
      id
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
  }
})