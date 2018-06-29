Page({
  data: {
    isShowModal: false,
  },
  onLoad: function (options) {},
  onShow: function () {},
  showModal() {
    this.setData({
      isShowModal: true
    })
  },
  onOk() {
    console.log("点击了ok")
  },
  onCancel() {
    console.log("点击了cancel")
  }
})