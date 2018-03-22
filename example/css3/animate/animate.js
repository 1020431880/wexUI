Page({
  data: {
    fadeIn: false,
    fadeInLeft: false,
    fadeInRight: false,
    fadeInUp: false,
    fadeInDown: false,
    fadeOut: false,
    fadeOutLeft: false,
    fadeOutRight: false,
    fadeOutUp: false,
    fadeOutDown: false,
    slideInUp: false,
    slideInDown: false,
    slideInLeft: false,
    slideInRight: false,
    slideOutUp: false,
    slideOutDown: false,
    slideOutLeft: false,
    slideOutRight: false,
    zoomIn: false,
    zoomOut: false,
    bounceIn: false,
    bounceOut: false,
    flash: false,
    pulse: false,
    shake: false,
    slideInUpBit: false,
    slideOutUpBit: false,
    slideInDownBit: false,
    slideOutDownBit: false,

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  tapAnimate1: function (e) {
    var that = this;
    this.setData({
      fadeIn: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeIn: false
      });
    }, 3000);
  },

  tapAnimate1_1: function (e) {
    var that = this;
    this.setData({
      fadeInLeft: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeInLeft: false
      });
    }, 3000);
  },
  tapAnimate1_2: function (e) {
    var that = this;
    this.setData({
      fadeInRight: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeInRight: false
      });
    }, 3000);
  },
  tapAnimate1_3: function (e) {
    var that = this;
    this.setData({
      fadeInUp: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeInUp: false
      });
    }, 3000);
  },
  tapAnimate1_4: function (e) {
    var that = this;
    this.setData({
      fadeInDown: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeInDown: false
      });
    }, 3000);
  },

  tapAnimate2: function (e) {
    var that = this;
    this.setData({
      fadeOut: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeOut: false
      });
    }, 3000);
  },


  tapAnimate2_1: function (e) {
    var that = this;
    this.setData({
      fadeOutLeft: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeOutLeft: false
      });
    }, 3000);
  },

  tapAnimate2_2: function (e) {
    var that = this;
    this.setData({
      fadeOutRight: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeOutRight: false
      });
    }, 3000);
  },

  tapAnimate2_3: function (e) {
    var that = this;
    this.setData({
      fadeOutUp: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeOutUp: false
      });
    }, 3000);
  },

  tapAnimate2_4: function (e) {
    var that = this;
    this.setData({
      fadeOutDown: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        fadeOutDown: false
      });
    }, 3000);
  },


  tapAnimate3: function (e) {
    var that = this;
    this.setData({
      slideInUp: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideInUp: false
      });
    }, 3000);
  },
  tapAnimate4: function (e) {
    var that = this;
    this.setData({
      slideInDown: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideInDown: false
      });
    }, 3000);
  },
  tapAnimate5: function (e) {
    var that = this;
    this.setData({
      slideInLeft: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideInLeft: false
      });
    }, 3000);
  },
  tapAnimate6: function (e) {
    var that = this;
    this.setData({
      slideInRight: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideInRight: false
      });
    }, 3000);
  },
  tapAnimate7: function (e) {
    var that = this;
    this.setData({
      slideOutUp: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideOutUp: false
      });
    }, 3000);
  },
  tapAnimate8: function (e) {
    var that = this;
    this.setData({
      slideOutDown: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideOutDown: false
      });
    }, 3000);
  },
  tapAnimate9: function (e) {
    var that = this;
    this.setData({
      slideOutLeft: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideOutLeft: false
      });
    }, 3000);
  },
  tapAnimate10: function (e) {
    var that = this;
    this.setData({
      slideOutRight: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideOutRight: false
      });
    }, 3000);
  },
  tapAnimate11: function (e) {
    var that = this;
    this.setData({
      zoomIn: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        zoomIn: false
      });
    }, 3000);
  },
  tapAnimate12: function (e) {
    var that = this;
    this.setData({
      zoomOut: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        zoomOut: false
      });
    }, 3000);
  },
  tapAnimate13: function (e) {
    var that = this;
    this.setData({
      bounceIn: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        bounceIn: false
      });
    }, 3000);
  },
  tapAnimate14: function (e) {
    var that = this;
    this.setData({
      bounceOut: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        bounceOut: false
      });
    }, 3000);
  },
  tapAnimate15: function (e) {
    var that = this;
    this.setData({
      flash: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        flash: false
      });
    }, 3000);
  },
  tapAnimate16: function (e) {
    var that = this;
    this.setData({
      pulse: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        pulse: false
      });
    }, 3000);
  },
  tapAnimate17: function (e) {
    var that = this;
    this.setData({
      shake: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        shake: false
      });
    }, 3000);
  },
  tapAnimate18: function (e) {
    var that = this;
    this.setData({
      slideInUpBit: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideInUpBit: false
      });
    }, 3000);
  },
  tapAnimate19: function (e) {
    var that = this;
    this.setData({
      slideOutUpBit: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideOutUpBit: false
      });
    }, 3000);
  },
  tapAnimate20: function (e) {
    var that = this;
    this.setData({
      slideInDownBit: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideInDownBit: false
      });
    }, 3000);
  },
  tapAnimate21: function (e) {
    var that = this;
    this.setData({
      slideOutDownBit: true
    });
    // 动画执行后移除
    setTimeout(function () {
      that.setData({
        slideOutDownBit: false
      });
    }, 3000);
  }

})