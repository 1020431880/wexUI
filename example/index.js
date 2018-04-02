import utils from "../dist/wexUI/libs/utils"
Page({


  data: {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false
  },

  onLoad: function (options) {},
  onShow: function () {},
  /**
   * 切换展示菜单
   */
  showMenu: function (e) {
    var item = e.currentTarget.dataset.item;
    if (item == "item1") {
      this.setData({
        item1: !this.data.item1
      });
    } else if (item == "item2") {
      this.setData({
        item2: !this.data.item2
      });
    } else if (item == "item3") {
      this.setData({
        item3: !this.data.item3
      });
    } else if (item == "item4") {
      this.setData({
        item4: !this.data.item4
      });
    } else if (item == "item5") {
      this.setData({
        item5: !this.data.item5
      });
    } else if (item == "item6") {
      this.setData({
        item6: !this.data.item6
      });
    } else if (item == "item7") {
      this.setData({
        item7: !this.data.item7
      });
    }
  },
  /**
   * 跳转相关的路径
   */
  tapExamplePage: function (e) {
    console.log(e)
    if (e.currentTarget.dataset.src == null || e.currentTarget.dataset.src == "") return;
    wx.navigateTo({
      url: e.currentTarget.dataset.src
    });
  }

})