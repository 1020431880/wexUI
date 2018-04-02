/*
 * 功能：通用工具类
 *
 * 描述：小程序常用到的一些处理方法集合
 * 创建日期：2018-3-27
 * 更新日期：2018-3-27
 */
export default {
    // 常用正则,使用方法：utils.regular.mobile.test(str)，返回true和false
    regular: {
        email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, //验证邮箱
        mobile: /^1(3|4|5|7|8)\d{9}$/, //验证手机号码
        telphone: /^(0[0-9]{2,3}\-)([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/, //验证固话
        idcard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, // 验证身份证，支持15位和18位身份证
        password: /^[a-zA-Z]\w{6,18}$/, // 以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        postcode: /^[1-9]\d{5}$/ //邮编
    },
    /*
     * 设置storage缓存（同步）
     */
    setStorage(key, data) {
        wx.setStorageSync(key, data);
    },
    /*
     * 从storage缓存得到数据（同步）
     */
    getStorage(key) {
        return wx.getStorageSync(key) || null;
    },
    /*
     * 从storage缓存删除数据（同步）
     */
    removeStorage(key) {
        wx.removeStorageSync(key);
    },
    /*
     * 从storage缓存清除所有的数据（同步）
     */
    clearStorage() {
        wx.clearStorageSync();
    },
    /**
     * 数字补零
     * 
     * @return 返回两位数字
     */
    digit(n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
    },
    /*
     * 判断是否是数字
     * 
     * @param str：字符串参数
     * @return 返回true和false
     */
    isNumber(str) {
        return (str != null && str != "") ? !isNaN(str) : false;
    },
    /*
     * 判断数据是否为空，可以验证字符串和数组和Object
     *     
     * @param obj:参数
     * @return 返回true和false
     */
    isNull(obj) {
        return (obj == undefined || obj == null || obj == "" || obj == [] || obj.length == 0 || Object.keys(obj).length == 0);
    },
    /*
     * 将字符转换为数字
     * 
     * @param str：数字字符串
     * @return 返回数字
     */
    parseInt(str) {
        return parseInt(str, 10);
    },
    /*
     * 去除字符串两边的空格
     */
    trim(str) {
        if (str == null || str == "") return;
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    /*
     * 去除字符串全部空格
     */
    trimAll(str) {
        if (this.isNull(str)) return;
        return str.replace(/\s/g, '');
    },
    /*
     * 获得默认日期，格式为：yyyy-MM-dd
     */
    getDefaultDate(date = new Date()) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        return [year, month, day].map(this.digit).join("-");
    },
    /*
     * 获得默认时间，格式为：yyyy-MM-dd HH:mm:ss
     */
    getDefaultTime(date = new Date()) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        return [year, month, day].map(this.digit).join("-") + " " + [hour, minute, second].map(this.digit).join(":");
    },

    /**
     * 将日期字符串转换为数组
     * 
     * @param dateStr:日期字符串 格式为yyyy-MM-dd HH:mm:ss
     * @return 返回数组
     */
    formatDateStrToArray(dateStr) {
        if (this.isNull(dateStr)) return;
        var array = new Array();
        if (dateStr.length <= 10) {
            array.push(dateStr.substring(0, 4));
            array.push(dateStr.substring(5, 7));
            array.push(dateStr.substring(8, 10));
        } else {
            array.push(dateStr.substring(0, 4));
            array.push(dateStr.substring(5, 7));
            array.push(dateStr.substring(8, 10));
            array.push(dateStr.substring(11, 13));
            array.push(dateStr.substring(14, 16));
            array.push(dateStr.substring(17, 19));
        }
        return array;
    },
    /**
     * 格式化日期字符串为日期对象
     * 
     * @param dateStr：日期字符串，仅支持yyyy-MM-dd
     * @return 返回日期对象
     */
    formatStrToDate: function (dateStr) {
        if (this.isNull(dateStr)) return;
        return new Date(dateStr.split("-"));
    },
    /**
     * 将日期对象转为指定日期格式的字符串
     * 
     * @param date:要转换的日期
     * @param formatStr:需要格式化的字符串，如yyyy/MM/dd HH:mm:ss，默认是yyyy-MM-dd
     * @return 返回指定格式的日期字符串
     */
    formatDateToStr(date, formatStr = "yyyy-MM-dd") {
        if ((!date) || new Date(date) == 'Invalid Date') {
            return null;
        }
        // 日期字符串格式化
        var o = {
            "M+": date.getMonth() + 1, // 月
            "d+": date.getDate(), // 日
            "h+": (date.getHours() % 12) == 0 ? 12 : (date.getHours() % 12), // 12小时制
            "H+": date.getHours(), // 24小时制
            "m+": date.getMinutes(), // 分钟
            "s+": date.getSeconds(), // 秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds(), //毫秒 
        };
        if (/(y+)/.test(formatStr)) {
            formatStr = formatStr.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(formatStr))
                formatStr = formatStr.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
        return formatStr;
    },

    /**
     * 获得加减后的天数
     * 
     * @param date:需要操作的日期
     * @param n：加减日期的数量，可以是正负
     * @return 返回加减后的日期对象
     */
    getDiffDateNumber(date, n) {
        date.setDate(date.getDate() + n);
        return date;
    },
    /**
     * 获得两个日期之间所有日期
     * 
     * @param start，开始时间，end：结束时间，可以是date和字符串类型,字符串支持yyyy-MM-dd
     * @return 返回日期字符串数组
     */
    getBetweenDateStr: function (beginStr, endStr) {
        var diffDates = [];
        var startDate = this.formatStrToDate(beginStr);
        var endDate = this.formatStrToDate(endStr);

        // 计算日期
        while (endDate.getTime() - startDate.getTime() >= 0) {
            var year = startDate.getFullYear();
            var month = startDate.getMonth().toString().length == 1 ? "0" + (startDate.getMonth() + 1).toString() : (startDate.getMonth() + 1);
            var day = startDate.getDate().toString().length == 1 ? "0" + startDate.getDate() : startDate.getDate();
            diffDates.push(year + "-" + month + "-" + day);
            startDate.setDate(startDate.getDate() + 1);
        }
        // 返回结果
        return diffDates;
    },
    /**
     * 根据年月日获得当天是周几
     * 
     * @param y:年份
     * @return 返回true和false
     */
    isLeap: function (y) {
        return (y % 100 !== 0 && y % 4 === 0) || (y % 400 === 0);
    },
    /**
     * 根据年月日获得当天是周几
     * 
     * @param date:日期
     * @param type:为0则返回周一，周二这样的汉字，为1返回1,2
     * @return 返回周几
     */
    getWeekOfDate: function (date, type = 0) {
        if (this.isNull(date)) return;
        var weekStr = null;
        if (type) {
            weekStr = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
        } else {
            weekStr = new Array("7", "1", "2", "3", "4", "5", "6")[date.getDay()];
        }
        // 返回结果
        return weekStr;

    },
    /**
     * 数组中是否包含指定的字符串
     * 
     * @param str：指定字符串
     * @param array：查找的数组
     * @return 返回true和false
     */
    containsInArray: function (str, array) {
        if (array == null || array.length <= 0) return;
        for (var v of array) {
            if (str == v) {
                return true;
            }
        }
        return false;
    },
    /**
     * 获得字符串在数组中出现位置
     * 
     * @param str:需要在数组中查找位置的字符串
     * @param array:数组
     * @return 返回位置
     */
    getIndexInArray: function (str, array) {
        if (this.isNull(str) || this.isNull(array)) return;
        return array.indexOf(str);
    }

}