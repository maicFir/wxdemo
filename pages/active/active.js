var texts = "嘻嘻";
var textarry = [];
var num = 30;
var objData = {
    data: {
        imgUrls: [
            { img: 'img/bg1.jpg', title: "第一张" },
            { img: 'img/bg2.jpg', title: "第二张" },
            { img: 'img/bg3.jpg', title: "第三张" },
            { img: 'img/bg4.jpg', title: "第三张" },
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        arrayInfo: [
            { name: "php", price: "20" },
            { name: "js", price: "30" },
            { name: "java", price: "50" }
        ],


        arrays: [{
            mode: 'scaleToFill',
            text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
        }, {
            mode: 'aspectFit',
            text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
        }, {
            mode: 'aspectFill',
            text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
        }, {
            mode: 'top',
            text: 'top：不缩放图片，只显示图片的顶部区域'
        }, {
            mode: 'bottom',
            text: 'bottom：不缩放图片，只显示图片的底部区域'
        }, {
            mode: 'center',
            text: 'center：不缩放图片，只显示图片的中间区域'
        }, {
            mode: 'left',
            text: 'left：不缩放图片，只显示图片的左边区域'
        }],

        textInfo: texts,
        Number: num,
        items: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本' },
            { name: 'ENG', value: '英国' },
            { name: 'TUR', value: '法国' },
        ]
    },
    getText: function (e) {
        console.log(e)
        this.setData({
            text: e.detail.value
        })
    },
    add: function (e) {
        textarry.push("你好啊...");
        num += 10;
        this.setData({
            textInfo: texts + textarry.join(""),
            Number: num
        })
    },
    checkboxChange: function () {
        console.log(11111);
    },
    bindReplace: function (e) {
        var value = e.detail.value
        var pos = e.detail.cursor
        if (pos != -1) {
            //光标在中间
            var left = e.detail.value.slice(0, pos)
            //计算光标的位置
            pos = left.replace(/11/g, '2').length
        }

        //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
        return {
            value: value.replace(/11/g, '2'),
            cursor: pos
        }
    },
    bindDateChange:function(e){
        console.log(e)
        this.setData({
            date: e.detail.value
        })
    }
};
Page(objData)