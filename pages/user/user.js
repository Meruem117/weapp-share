// pages/user/user.js
const userService = require('../../services/user')
const commentService = require('../../services/comment')

Page({
  data: {
    id: '',
    data: {},
    list: []
  },
  onLoad: function (options) {
    const id = options.id;
    this.setData({
      id
    })
    this.loadUserInfo();
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

    }
    const res = await commentService.getPages()
  }
})