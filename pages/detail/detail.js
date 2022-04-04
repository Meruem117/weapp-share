// pages/detail/detail.js
const commentService = require('../../services/comment')
const constant = require('../../utils/constant')

Page({
  data: {
    id: 0,
    page: 1,
    size: 3,
    data: {},
    list: [],
    total: 0,
    commentId: 0,
    content: '',
    icon: constant.ICON
  },
  onLoad: function (option) {
    this.setData({
      id: option.id,
      commentId: option.id
    })
    this.loadDetail()
    this.loadCommentList()
  },
  /**
   * 加载详情
   */
  async loadDetail() {
    const res = await commentService.getCommentById(this.data.id)
    this.setData({
      data: res.data,
    })
  },
  /**
   * 加载评论列表
   */
  async loadCommentList() {
    let params = {
      userId: 0,
      commentId: this.data.id,
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
   * 跳转用户详情
   * @param {TargetDataset<{id: number}>} e 
   */
  toUser(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../user/user?id=' + id
    })
  },
  /**
   * 跳转评论用户详情
   * @param {{detail: number}} e 
   */
  toCommentUser(e) {
    const id = e.detail
    wx.navigateTo({
      url: '../user/user?id=' + id
    })
  },
  /**
   * 评论框监听
   * @param {{detail: string}} e 
   */
  onChange(e) {
    this.setData({
      content: e.detail
    })
  },
  /**
   * 评论
   */
  onComment() {
    let comment = {
      userId: 2,
      commentId: this.data.commentId,
      content: this.data.content,
    }
    commentService.addComment(comment).then(() => {
      wx.showToast({
        title: 'Comment Success',
        icon: 'success'
      })
      this.setData({
        content: ''
      })
      this.loadCommentList()
    })
  },
})