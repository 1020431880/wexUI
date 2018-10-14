Page({
  data: {
    isSearchCancel: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  tapToggleSearchCancel() {
    this.setData({
      isSearchCancel: !this.data.isSearchCancel
    })
  },
  tapSearchCancel() {
    this.setData({
      isSearchCancel: false
    })
  }
})