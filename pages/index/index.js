//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    name:"webqq"
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(111)
    // wx.navigateTo({
    //   url: "../home/home"
    // })
  },
  //跳转到active活动页面
  getActive:function(){
    console.log("hahah")
    wx.navigateTo({
      url: '../active/active'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
