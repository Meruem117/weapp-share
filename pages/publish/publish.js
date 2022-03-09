// pages/publish/publish.js

Page({
  data: {
    l: 0,
    i1: false,
    i2: false,
    i3: false,
    i4: false,
    i5: false
  },
  onLoad: function (options) {
    let l = options.l;
    this.setData({
      l: l - 1 + 2
    })
  },
  publish: function (e) {
    var l = this.data.l;
    var content = e.detail.value.content;
    var pages = getCurrentPages();
    var prepage = pages[pages.length - 2];
    prepage.setData({
      publish: [{
        "info-id": l,
        "user_id": 0,
        "user_name": "MEAT",
        "user_img": "../../images/icon.jpg",
        "content": content,
        "good_num": 0,
        "comment_num": 0,
        "islike": false,
        "show": true
      }]
    })
    wx.navigateBack({
      delta: 0,
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