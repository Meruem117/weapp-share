// pages/detail/detail.js
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
    icon: constant.ICON
  },
  onLoad: function (option) {
    this.setData({
      id: option.id,
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
      id: this.data.id,
      page: this.data.page,
      size: this.data.size
    }
    const res = await commentService.getCommentListById(params)
    this.setData({
      list: res.data.list,
      total: res.data.total
    })
  },
})