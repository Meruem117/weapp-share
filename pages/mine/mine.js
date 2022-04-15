// pages/mine/mine.js
const userService = require('../../services/user')
const recordService = require('../../services/record')
const constant = require('../../utils/constant')
const app = getApp()

Page({
  data: {
    motto: 'Welcome to Shares',
    id: 0,
    data: {},
    size: 5,
    sharePage: 1,
    recordPage: 1,
    shareList: [],
    recordList: [],
    hasMoreShare: true,
    hasMoreRecord: true,
    tabs: [{
        "id": 0,
        "name": "分享",
        "isActive": true
      },
      {
        "id": 1,
        "name": "记录",
        "isActive": false
      },
      {
        "id": 2,
        "name": "私信",
        "isActive": false
      }
    ],
    icon: constant.ICON
  },
  onLoad: function () {
    this.data.id = app.globalData.id
    this.loadUserInfo()
    this.loadRecord()
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
   * 加载记录
   */
  async loadRecord() {
    let params = {
      userId: this.data.id,
      key: '',
      page: this.data.recordPage,
      size: this.data.size
    }
    const res = await recordService.getPages(params)
    if (res.data.list.length > 0) {
      this.setData({
        recordList: this.data.list.concat(res.data.list),
        hasMoreRecord: res.data.total > this.data.size && res.data.list.length === this.data.size
      })
    } else {
      this.setData({
        hasMoreRecord: false
      })
    }
  },
  /**
   * 下拉刷新记录
   */
  onRefreshRecord() {
    this.setData({
      recordList: [],
      recordPage: 1,
      hasMoreRecord: true
    })
    this.loadRecord()
  },
  /**
   * 加载更多记录
   */
  loadMoreRecord() {
    if (this.data.hasMoreRecord) {
      this.setData({
        recordPage: ++this.data.recordPage
      })
      this.loadRecord()
    }
  },
})