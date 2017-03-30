var list = {name:"hdehd"};
var idObj = {};
var initData = {
    datas: [
        { img: "img/1.jpg", name: "小花", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
        { img: "img/2.jpg", name: "大白", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
        { img: "img/1.jpg", name: "天天", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
        { img: "img/2.jpg", name: "乐乐", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
        { img: "img/1.jpg", name: "任我行", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
        { img: "img/2.jpg", name: "人字拖", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
        { img: "img/1.jpg", name: "霸天虎", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
        { img: "img/2.jpg", name: "嘻嘻", "cnt": "个呵呵呵", url: "/pages/chat/chat" },
    ],
    list:idObj
};
var arrData = [];
Page({
    data: initData,
    getChat:function(e){
       var ev = e||window.event;
        this.setData({
            list:  "嘻嘻哈哈",
        });
        idObj = {
            id:ev.target.dataset.id,
            text:e.currentTarget.dataset.text
        };
        console.log(idObj);
        console.log(e.currentTarget.dataset.text);
        // console.log(idObj);
        // wx.setNavigationBarTitle({
        //     title: 'haha'
        // });
        // list.name = e.
    }
});
module.exports.objdata = {
    data:initData,
    name:initData.list
};
// module.exports.objData = {
//     tabEvent:{
//         chat:getChat,
//     },
//     data:initData.datas
// };

