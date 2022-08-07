// pages/login/login.js
const loginService = require('../../services/login')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  /**
   * 输入框监听
   * @param {*} event 
   */
  onChange(event) {
    let {
      param
    } = event.currentTarget.dataset
    this.setData({
      [param]: event.detail
    })
  },
  /**
   * 登录
   */
  login() {
    if (!this.data.username) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none'
      })
      return
    }
    if (!this.data.password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return
    }
    loginService.login(this.data).then(res => {
      if (res.code == 200) {
        wx.setStorageSync('username', this.data.username)
        wx.setStorageSync('password', this.data.password)
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    })
  },
  /**
   * 注册
   */
  regist() {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: wx.getStorageSync('username') || '',
      password: wx.getStorageSync('password') || '',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})