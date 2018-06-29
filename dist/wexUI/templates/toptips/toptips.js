/**
 * Toptips 组件
 */
export default {
    timer: null,
    /**
     * 展示 toptips
     * @param {} options 
     */

    showToptips(options) {
        // Toptips 默认配置
        const settings = {
            show: true, //是否展示，默认true
            title: "", // 提示的内容
            icon: "", //展示类型，有“loadig”，“success”，“fail”，“info”，“warn”，默认只显示文字
            showIcon: true, //是否展示icon图标，对应type的类型
            duration: 1500, //提示的延迟时间，单位毫秒，默认：1500
            callback(e) {} // 接口调用结束的回调函数
        }

        // 合并默认配置和传递的配置
        const Toptips = Object.assign(settings, options);
        // 设置数据
        this.setData({
            Toptips
        });

        //判断是否有定时
        if (Toptips.duration) {
            // 如果传递的时间小于等于0，则一直显示
            if (Toptips.duration <= 0) {
                return;
            }
            // 清空timer
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.hideToptips();
            }, Toptips.duration);
        }
    },
    /**
     * 定时结束后隐藏 Toptips
     */
    hideToptips() {
        clearTimeout(this.timer);
        this.setData({
            "Toptips.show": false
        });
        // 完成后调用回调函数
        this.data.Toptips.callback && this.data.Toptips.callback();

    }
}