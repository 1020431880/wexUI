import wexUI from "../../../dist/wexUI/wexUI.js";

Page(Object.assign({}, wexUI.Toast, {
  data: {
    text: "Page toast"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  tapShowLoading() {
    wx.showToast({
      title: '正在加载...',
      icon: 'loading',
      duration: 2000
    })
  },
  tapShowSuccess() {
    wx.showToast({
      title: '正在加载...',
      icon: 'success',
      duration: 2000
    })
  },
  tapShowToast(e) {
    this.showToast({
      title: "正在加载...",
    });
  },
  tapShowToastCallback(e) {
    this.showToast({
      title: "正在加载...",
      callback(e) {
        wx.showModal({
          title: "回调函数",
          content: "测试Toast的回调函数！",
          showCancel: false
        });
      }
    });
  },
  tapShowToastMask(e) {
    this.showToast({
      title: "显示遮罩层...",
      mask: true
    });
  },
  tapShowToastLoading(e) {
    this.showToast({
      title: "你好，正在操作中..",
      icon: "loading"
    });
  },
  tapShowToastSuccess(e) {
    this.showToast({
      title: "你好，操作成功！",
      icon: "success"
    });
  },
  tapShowToastFail(e) {
    this.showToast({
      title: "抱歉，操作失败！",
      icon: "fail"
    });
  },
  tapShowToastInfo(e) {
    this.showToast({
      title: "抱歉，操作提示！",
      icon: "info"
    });
  },
  tapShowToastWarn(e) {
    this.showToast({
      title: "抱歉，操作警告！",
      icon: "warn"
    });
  },
  tapShowToastImage(e) {
    this.showToast({
      title: "正在使用自定义图标..",
      icon: "warn",
      image: "https://b.yzcdn.cn/v2/image/dashboard/secured_transaction/suc_green@2x.png"
    });
  }
}));