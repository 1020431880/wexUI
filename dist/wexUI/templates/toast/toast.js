/**
 * Toast组件
 */
export default {
    timer: null,
    /**
     * 展示toast
     * @param {} options 
     */

    showToast(options) {
        // Toast默认配置
        const settings = {
            show: true, //是否展示，默认true
            title: "", // 提示的内容
            icon: "", //组件定义的图标，有“loading”，“success”，“fail”，“info”，“warn”，默认不展示
            image: "", //自定义图标的本地路径，image 的优先级高于 icon
            duration: 1500, //提示的延迟时间，单位毫秒，默认：1500
            mask: false, // 是否显示透明蒙层，防止触摸穿透，默认：false
            callback(e) {} // 调用回调函数
        }

        // 合并默认配置和传递的配置
        const Toast = Object.assign(settings, options);
        // 设置数据
        this.setData({
            Toast
        });

        //判断是否有定时
        if (Toast.duration) {
            // 如果传递的时间小于等于0，则一直显示
            if (Toast.duration <= 0) {
                return;
            }
            // 清空timer
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.hideToastAndCallback();
            }, Toast.duration);
        }
    },
    /**
     * 显示一定时间后隐藏toast并执行回调函数
     */
    hideToastAndCallback() {
        clearTimeout(this.timer);
        this.setData({
            "Toast.mask": false,
            "Toast.show": false
        });
        // 调用回调函数
        this.data.Toast.callback && this.data.Toast.callback();
    },
    /**
     * 定时结束后完全隐藏Toast
     */
    hideToast() {
        clearTimeout(this.timer);
        this.setData({
            "Toast.mask": false,
            "Toast.show": false
        });
    }
}