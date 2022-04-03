// components/tabs/tabs.js

Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {
    tabs: []
  },
  methods: {
    handleItemTap(e) {
      const {
        index
      } = e.currentTarget.dataset;
      this.triggerEvent("itemChange", {
        index
      })
    }
  }
})