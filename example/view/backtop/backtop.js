Page({
  data: {},
  onLoad: function (options) {},
  tapBacktop(e) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }
})