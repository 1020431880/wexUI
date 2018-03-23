import wexUI from "../../../dist/wexUI/wexUI.js";

Page(Object.assign({}, wexUI.Toptips, {
  data: {
    text: "Page toptips"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  tapShowToptips() {
    console.log(wexUI)
    this.showToptips({
      title: "操作成功！"
    });
  },
  tapShowToptipsCallback() {
    this.showToptips({
      title: "操作成功！",
      callback(e) {
        wx.showModal({
          title: "回调函数",
          content: "测试Totips的回调函数！",
          showCancel: false
        });
      }
    });
  },
  tapShowToptipsLoading() {
    this.showToptips({
      title: "正在加载...",
      type: "loading"
    });
  },
  tapShowToptipsSuccess() {
    this.showToptips({
      title: "操作成功！",
      type: "success"
    });
  },
  tapShowToptipsFail() {
    this.showToptips({
      title: "抱歉，操作失败！",
      showIcon: false,
      type: "fail"
    });
  },
  tapShowToptipsInfo() {
    this.showToptips({
      title: "操作提示！",
      type: "info"
    });
  },
  tapShowToptipsWarn() {
    this.showToptips({
      title: "操作警告！",

      type: "warn"
    });
  },

}));