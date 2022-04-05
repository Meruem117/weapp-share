// components/comment-list/comment-list.js
const constant = require('../../utils/constant')

Component({
  properties: {
    data: {
      type: Array,
      value: []
    },
    hasMore: {
      type: Boolean,
      value: true
    },
    height: {
      type: String,
      value: '1000rpx'
    }
  },
  data: {
    showRefresh: false,
    showLoading: false,
    icon: constant.ICON
  },
  methods: {
    onRefresh() {
      this.triggerEvent('onRefresh')
      setTimeout(() => {
        this.setData({
          showRefresh: false
        })
      }, 500)
    },
    loadMore() {
      if (this.properties.hasMore) {
        this.setData({
          showLoading: true
        })
        this.triggerEvent('loadMore')
        setTimeout(() => {
          this.setData({
            showLoading: false
          })
        }, 500)
      }
    },
    tapUser(e) {
      this.triggerEvent('tapUser', e.currentTarget.dataset.id)
    },
    tapComment(e) {
      this.triggerEvent('tapComment', e.currentTarget.dataset.id)
    },
  }
})