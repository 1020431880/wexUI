Page({
  data: {
    // 普通步骤条
    steps1: [{
      done: false,
      current: false,
      text: "注册账号"
    }, {
      done: false,
      current: false,
      text: "填写地址"
    }, {
      done: false,
      current: false,
      text: "发货成功"
    }, {
      done: false,
      current: false,
      text: "交易结束"
    }],
    steps2: [{
      done: true,
      current: false,
      text: "注册账号"
    }, {
      done: true,
      current: true,
      text: "填写地址"
    }, {
      done: false,
      current: false,
      text: "发货成功"
    }, {
      done: false,
      current: false,
      text: "交易结束"
    }],
    steps3: [{
      done: true,
      current: false,
      text: "注册账号"
    }, {
      done: true,
      current: false,
      text: "填写地址"
    }, {
      done: true,
      current: false,
      text: "发货成功"
    }, {
      done: true,
      current: true,
      text: "交易结束"
    }],
    // 带描述的步骤条
    steps4: [{
      done: true,
      current: false,
      text: "注册账号",
      desc: "(已完成)"
    }, {
      done: true,
      current: false,
      text: "填写地址",
      desc: "(已完成)"
    }, {
      done: true,
      current: true,
      text: "发货成功",
      desc: "(已完成)"
    }, {
      done: false,
      current: false,
      text: "交易结束",
      desc: "(待完成)"
    }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  }

})