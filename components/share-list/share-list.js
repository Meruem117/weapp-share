// components/share-list/share-list.js
const constant = require('../../utils/constant')

Component({
  properties: {
    data: {
      type: Array,
      value: []
    },
    tapContent: {
      type: Function,
      value: function (e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../detail/detail?id=' + id
        })
      }
    }
  },
  data: {
    icon: constant.ICON
  },
  methods: {
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
     * 跳转分享详情
     * @param {TargetDataset<{id: number}>} e 
     */
    toDetail(e) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '../detail/detail?id=' + id
      })
    }
  }
})