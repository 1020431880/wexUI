import {
  Toptips
} from "../../../dist/wexUI/wexUI.js";

Page(Object.assign({}, Toptips, {
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
      icon: "loading"
    });
  },
  tapShowToptipsSuccess() {
    this.showToptips({
      title: "操作成功！",
      icon: "success"
    });
  },
  tapShowToptipsFail() {
    this.showToptips({
      title: "抱歉，操作失败！",
      showIcon: false,
      icon: "fail"
    });
  },
  tapShowToptipsInfo() {
    this.showToptips({
      title: "操作提示！",
      icon: "info"
    });
  },
  tapShowToptipsWarn() {
    this.showToptips({
      title: "操作警告！",

      icon: "warn"
    });
  },

}));