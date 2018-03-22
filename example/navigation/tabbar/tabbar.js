Page({
  data: {
    tabbar1: false,
    tabbar2: true,
    tabbar3: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  tapTabbar1: function (e) {
    this.setData({
      tabbar1: true,
      tabbar2: false,
      tabbar3: false
    });
  },
  tapTabbar2: function (e) {
    this.setData({
      tabbar1: false,
      tabbar2: true,
      tabbar3: false
    });
  },
  tapTabbar3: function (e) {
    this.setData({
      tabbar1: false,
      tabbar2: false,
      tabbar3: true
    });
  }

})