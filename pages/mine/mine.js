// pages/mine/mine.js
const util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Welcome to Shares',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user_img: "../../images/icon.jpg",
    user_name: "MEAT",
    feed: [],
    user: [],
    record: [],
    moreRecord: [],
    message: [],
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
    ]
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    this.refresh();
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  onShow: function (options) {
    var pages = getCurrentPages();
    var curpage = pages[pages.length - 1];
  },
  handleItemChange(e) {
    const {
      index
    } = e.detail;
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },
  refresh: function () {
    var feed = util.getPublish();
    var user = util.getUser();
    var record = util.getRecord();
    var message = util.getMessage();
    var feed_data = feed.data;
    var user_data = user.data;
    var record_data = record.data;
    var message_data = message.data;
    this.setData({
      feed: feed_data,
      user: user_data,
      record: record_data,
      message: message_data
    });
  },
  bindContentTap: function (cid) {
    let aid = cid.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../mydetail/mydetail?cid=' + aid
    })
  },
  toLike: function (e) {
    let like = e.currentTarget.dataset.like;
    let id = e.currentTarget.dataset.id - 1;
    let num = e.currentTarget.dataset.num;
    if (like == false) {
      this.setData({
        ['feed[' + id + '].good_num']: num + 1
      })
    } else if (like == true) {
      this.setData({
        ['feed[' + id + '].good_num']: num - 1
      })
    }
    this.setData({
      ['feed[' + id + '].islike']: !like
    })
  },
  toCollect: function (e) {
    let collect = e.currentTarget.dataset.collect;
    let id = e.currentTarget.dataset.id - 1;
    this.setData({
      ['feed[' + id + '].iscollect']: !collect
    })
  },
  delete: function (e) {
    let show = e.currentTarget.dataset.show;
    let sid = e.currentTarget.dataset.sid - 1;
    if (show == true) {
      this.setData({
        ['feed[' + sid + '].show']: false
      })
    }
  },
  deleteRecord: function (e) {
    let show = e.currentTarget.dataset.show;
    let sid = e.currentTarget.dataset.sid - 1;
    if (show == true) {
      this.setData({
        ['record[' + sid + '].show']: false
      })
    }
  },
  deleteMRecord: function (e) {
    let show = e.currentTarget.dataset.show;
    if (show == true) {
      this.setData({
        ['moreRecord[0].show']: false
      })
    }
  },
  toMore: function (e) {
    wx.navigateTo({
      url: '../more/more'
    })
  },
  toUser: function (e) {
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '../user/user?uid=' + uid
    })
  },
  toMessage: function (e) {
    let id = e.currentTarget.dataset.id;
    let name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../message/message?id=' + id + '&name=' + name
    })
  },
  toComment: function (e) {
    let tp = e.currentTarget.dataset.tp;
    let aid = e.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '../mydetail/mydetail?tp=' + tp + '&cid=' + aid
    })
  }
})