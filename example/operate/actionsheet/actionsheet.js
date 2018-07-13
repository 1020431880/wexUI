import {
  Actionsheet
} from "../../../dist/wexUI/wexUI.js";

Page(Object.assign({}, Actionsheet, {
  data: {
    text: "Page Actionsheet"
  },
  onLoad: function (options) {
    console.log(wexUI)
  },
  // 页面使用时候引入onShareAppMessage
  onShareAppMessage: function (res) {
    //分享后手工关闭行动按钮
    this.setData({
      "Actionsheet.show": false
    })
    return {
      title: '自定义转发标题',
      path: '转发的地址',
      success: function (res) {
        // 转发成功

      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  tapShowActionsheet() {
    this.showActionsheet({
      shareText: "分享", //定义分享按钮文字
      showCancel: true, //是否显示关闭按钮
      cancelText: "关闭", //定义关闭按钮的文字
      actions: [{
        name: "选项1", //自定义名称
        subname: "描述语1", //自定义描述语
        callback(e) {
          console.log(e)
          wx.showModal({
            title: "操作提示",
            content: "点击了：" + e.name,
            showCancel: false
          });
        } //点击回调函数
      }, {
        name: "选项2", //自定义名称
        subname: "描述语2", //自定义描述语
        callback(e) {
          wx.showModal({
            title: "操作提示",
            content: "点击了：" + e.name,
            showCancel: false
          });
        } //点击回调函数
      }, {
        name: "选项3", //自定义名称
        subname: "描述语3", //自定义描述语
        callback(e) {
          wx.showModal({
            title: "操作提示",
            content: "点击了：" + e.name,
            showCancel: false
          });
        }
      }]
    });
  }

}));