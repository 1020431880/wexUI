Page({
  data: {
    showPopupCenter: false, // 中间显示
    showPopupTop: false, //顶部显示
    showPopupBottom: false, //底部显示
    showPopupLeft: false, //左边显示
    showPopupRight: false //右边显示
  },
  onLoad: function (options) {},
  tapShowPopupCenter(e) {
    this.setData({
      showPopupCenter: !this.data.showPopupCenter
    });
  },
  tapShowPopupTop(e) {
    this.setData({
      showPopupTop: !this.data.showPopupTop
    });
  },
  tapShowPopupBottom(e) {
    this.setData({
      showPopupBottom: !this.data.showPopupBottom
    });
  },
  tapShowPopupLeft(e) {
    this.setData({
      showPopupLeft: !this.data.showPopupLeft
    });
  },
  tapShowPopupRight(e) {
    this.setData({
      showPopupRight: !this.data.showPopupRight
    });
  }
})