// pages/contact/contact.js
Page({
  data:{
    navTab:[
      {name:"nav-friend",text:"新朋友",iselected:1},
      {name:"nav-group",text:"群聊",iselected:0},
      {name:"nav-discut",text:"公众号",iselected:0}
    ],
    newFirend:{
        myFrided:{
          title:"我的好友",
          textArry:[
            {name:"司徒大大",imgUrl:"../home/img/1.jpg"},
            {name:"小白",imgUrl:"../home/img/1.jpg"},
            {name:"畅想",imgUrl:"../home/img/2.jpg"}
          ]
        },
        homeFriend:{
           title:"家乡好友",
           textArry:[
              {name:"灯泡",imgUrl:"../home/img/1.jpg"},
              {name:'完美',imgUrl:"../home/img/1.jpg"},
              {name:'媳妇',imgUrl:"../home/img/2.jpg"},
            ]
        },
        qinren:{
          title:"亲人",
           textArry:[
              {name:"哥哥",imgUrl:"../home/img/1.jpg"},
              {name:'姐姐',imgUrl:"../home/img/1.jpg"},
              {name:'弟弟',imgUrl:"../home/img/2.jpg"},
            ]
        }
    },
    currentIndex:0,
    index:0,
    flag1:0,
    flag2:1,
    flag3:2
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  selectTab:function(e){
    console.log(e);
    this.setData({
       currentIndex:e.currentTarget.dataset.idx
    })
  },
  show:function(e){
    this.setData({
       index:e.currentTarget.dataset.flag
    })
  }
})