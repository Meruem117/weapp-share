// components/tabs/tabs.js
Component({
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },
  data: {
    tabs:[]
  },
  methods: {
    handleItemTap(e){
      const {index} = e.currentTarget.dataset;
      this.triggerEvent("itemChange",{index});
      // let {tabs} = this.data;
      // tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      // this.setData({
      //   tabs
      // })
    }
  }
})
