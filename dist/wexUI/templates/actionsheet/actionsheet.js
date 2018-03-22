/**
 * Actionsheet 组件
 */
export default {
    timer: null,
    /**
     * 展示 actionsheet
     * @param {} options 
     */

    showActionsheet(options) {
        // Actionsheet 默认配置
        const settings = {
            show: true, //是否展示
            showShare: true, //是否显示分享按钮
            shareText: "分享", //定义分享按钮文字
            showCancel: true, //是否显示关闭按钮
            cancelText: "关闭", //定义关闭按钮的文字
            actions: [{
                name: "选项1", //自定义名称
                subname: "描述语1", //自定义描述语
                callback(e) {} //点击回调函数
            }]
        }

        // 合并默认配置和传递的配置
        const Actionsheet = Object.assign(settings, options);
        // 设置数据
        this.setData({
            Actionsheet
        });

    },
    tapHideActionsheet() {
        this.setData({
            "Actionsheet.show": false
        });
    },
    tapActionsItem(e) {
        let index = e.currentTarget.dataset.index;
        let actions = this.data.Actionsheet.actions[index];
        actions.callback && actions.callback(actions);
        this.setData({
            "Actionsheet.show": false
        })
    }

}