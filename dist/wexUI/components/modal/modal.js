Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    behaviors: [],
    properties: {
        // 内容的宽度
        width: {
            type: String,
            value: '10%'
        },
        // 文本标题
        title: {
            type: String,
            value: '操作提示'
        },
        // 取消的文字
        cancelText: {
            type: String,
            value: '取消'
        },
        // 确定的文字
        okText: {
            type: String,
            value: '确定'
        },
        // modal底部的slot
        slotFoot: {
            type: Boolean,
            value: false
        },
        // 点击遮罩层是否可以关闭
        maskClosable: {
            type: Boolean,
            value: true
        },
        // 控制是否显示
        vModel: {
            type: Boolean,
            value: false,
        },
        // 是否显示取消按钮
        showCancel: {
            type: Boolean,
            value: true,
        }
    },
    data: {},
    ready() {},
    methods: {
        onOk(e) {
            this.setData({
                vModel: false
            })
            this.triggerEvent("onOk", e);
        },
        onCancel(e) {
            this.setData({
                vModel: false
            })
            this.triggerEvent("onCancel", e);
        },
        maskCloseModal(e) {
            if (this.data.maskClosable) {
                this.onCancel(e);
            }
        },
    }
})