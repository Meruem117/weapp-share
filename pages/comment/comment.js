// pages/comment/comment.js

Page({
  data: {
    tp: "",
    u: "",
    uid: 0,
    cmt_id: 0
  },
  onLoad: function (options) {
    let tp = options.tp;
    let u = options.u;
    let uid = options.uid;
    this.setData({
      tp: tp,
      u: u,
      uid: uid
    })
  },
  comment: function (e) {
    var tp = this.data.tp;
    if (tp == 'msg') {
      var content = e.detail.value.content;
      var pages = getCurrentPages();
      var prepage = pages[pages.length - 2];
      prepage.setData({
        msg: [{
          "c_user_id": 0,
          "c_user_name": "MEAT",
          "c_user_img": "../../images/icon.jpg",
          "comment": content,
          "c_good_num": 0,
          "c_comment_num": 0,
          "c_islike": false,
          "show": true
        }]
      })
      wx.navigateBack({
        delta: 0,
      })
    } else if (tp == 'cmt') {
      var u = this.data.u;
      var uid = this.data.uid;
      var cmt_id = this.data.cmt_id + 1;
      var content = e.detail.value.content;
      var pages = getCurrentPages();
      var prepage = pages[pages.length - 2];
      prepage.setData({
        cmt: [{
          "cmt_id": cmt_id,
          "c_user_id": 0,
          "c_user_name": "MEAT",
          "c_user_img": "../../images/icon.jpg",
          "to_user": u,
          "to_user_id": uid,
          "comment": content,
          "c_good_num": 0,
          "c_comment_num": 0,
          "c_islike": false,
          "show": true
        }]
      })
      wx.navigateBack({
        delta: 0,
      })
    } else {
      wx.navigateBack({
        delta: 0,
      })
    }
  }
})