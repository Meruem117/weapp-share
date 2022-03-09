// pages/mydetail/mydetail.js
const util = require('../../utils/util.js')

Page({
  data: {
    feed: [],
    feed_length: 0,
    detail: [],
    cid: '',
    msg: [],
    cmt: [],
    hidden: true,
    focus: false,
    tp: '',
    u: "",
    uid: 0,
    cmt_id: 0,
    inputValue: '',
    i1: false,
    i2: false,
    i3: false,
    i4: false,
    i5: false
  },
  onLoad: function (options) {
    let cid = options.cid;
    let tp = options.tp;
    this.setData({
      cid: cid,
      tp: tp
    })
    this.refresh();
    if (tp == 'msg') {
      this.setData({
        hidden: !this.data.hidden,
        focus: !this.data.focus
      })
      this.comment();
    }
  },
  onShow: function (options) {
    var pages = getCurrentPages();
    var curpage = pages[pages.length - 1];
  },
  refresh: function () {
    var feed = util.getPublish();
    var feed_data = feed.data;
    var detail = util.getMyDetail();
    var detail_data = detail.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length,
      detail: detail_data
    });
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
  toClike: function (e) {
    let likec = e.currentTarget.dataset.likec;
    let idc = e.currentTarget.dataset.idc - 1;
    let numc = e.currentTarget.dataset.numc;
    if (likec == false) {
      this.setData({
        ['detail[' + idc + '].c_good_num']: numc + 1
      })
    } else if (likec == true) {
      this.setData({
        ['detail[' + idc + '].c_good_num']: numc - 1
      })
    }
    this.setData({
      ['detail[' + idc + '].c_islike']: !likec
    })
  },
  msglike: function (e) {
    let msgl = e.currentTarget.dataset.msgl;
    let msgn = e.currentTarget.dataset.msgn;
    if (msgl == false) {
      this.setData({
        ['msg[0].c_good_num']: msgn + 1
      })
    } else if (msgl == true) {
      this.setData({
        ['msg[0].c_good_num']: msgn - 1
      })
    }
    this.setData({
      ['msg[0].c_islike']: !msgl
    })
  },
  msgdelete: function (e) {
    let show = e.currentTarget.dataset.show;
    if (show == true) {
      this.setData({
        ['msg[0].show']: false
      })
    }
  },
  cmtlike: function (e) {
    let cmtl = e.currentTarget.dataset.cmtl;
    let cmtn = e.currentTarget.dataset.cmtn;
    if (cmtl == false) {
      this.setData({
        ['cmt[0].c_good_num']: cmtn + 1
      })
    } else if (cmtl == true) {
      this.setData({
        ['cmt[0].c_good_num']: cmtn - 1
      })
    }
    this.setData({
      ['cmt[0].c_islike']: !cmtl
    })
  },
  cmtdelete: function (e) {
    let show = e.currentTarget.dataset.show;
    if (show == true) {
      this.setData({
        ['cmt[0].show']: false
      })
    }
  },
  toMine: function (e) {
    wx.switchTab({
      url: '../mine/mine',
    })
  },
  // toComment:function(e){
  //   let tp = e.currentTarget.dataset.tp;
  //   let u = e.currentTarget.dataset.u;
  //   wx.navigateTo({
  //     url: '../comment/comment?tp='+tp+'&u='+u
  //   })
  // },
  toComment: function (e) {
    let tp = e.currentTarget.dataset.tp;
    let u = e.currentTarget.dataset.u;
    let uid = e.currentTarget.dataset.uid;
    let cmt_id = e.currentTarget.dataset.cmt_id;
    this.setData({
      hidden: !this.data.hidden,
      focus: !this.data.focus,
      tp: tp,
      u: u,
      uid: uid,
      cmt_id: cmt_id
    })
    this.comment();
  },
  comment: function (e) {
    var value = e.detail.value.content;
    var tp = this.data.tp;
    var u = this.data.u;
    var uid = this.data.uid;
    var cmt_id = this.data.cmt_id;
    this.setData({
      inputValue: value
    })
    var content = this.data.inputValue;
    if (tp == 'msg') {
      this.setData({
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
    } else if (tp == 'cmt') {
      this.setData({
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
    }
    this.setData({
      hidden: true,
      focus: false,
      inputValue: ''
    })
  },
  toClick: function (e) {
    let i = e.currentTarget.dataset.i;
    if (i == 'voice') {
      this.setData({
        i1: !this.data.i1,
        i2: false,
        i3: false,
        i4: false,
        i5: false
      })
    } else if (i == 'picture') {
      this.setData({
        i1: false,
        i2: !this.data.i2,
        i3: false,
        i4: false,
        i5: false
      })
    } else if (i == 'camera') {
      this.setData({
        i1: false,
        i2: false,
        i3: !this.data.i3,
        i4: false,
        i5: false
      })
    } else if (i == 'face') {
      this.setData({
        i1: false,
        i2: false,
        i3: false,
        i4: !this.data.i4,
        i5: false
      })
    } else if (i == 'add') {
      this.setData({
        i1: false,
        i2: false,
        i3: false,
        i4: false,
        i5: !this.data.i5
      })
    }
  }
})