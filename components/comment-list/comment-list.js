// components/share-list/share-list.js
const constant = require('../../utils/constant')

Component({
  properties: {
    data: {
      type: Array,
      value: []
    }
  },
  data: {
    icon: constant.ICON
  },
  methods: {
    tapUser(e) {
      this.triggerEvent('tapUser', e.currentTarget.dataset.id)
    },
    tapContent(e) {
      this.triggerEvent('tapContent', e.currentTarget.dataset.id)
    },
  }
})