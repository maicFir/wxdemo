Page({
  data: {
    navTab: [
      { name: "nav-friend", text: "好友动态", iselected: 1 },
      { name: "nav-group", text: "附近", iselected: 0 },
      { name: "nav-discut", text: "兴趣部落", iselected: 0 }
    ],
    imgaelist: [
      { imgurl: "", text: "游戏" },
      { imgurl: "", text: "日记" },
      { imgurl: "", text: "看点" },
      { imgurl: "", text: "京东购物" },
      { imgurl: "", text: "阅读" },
      { imgurl: "", text: "动漫" },
      { imgurl: "", text: "音乐" },
      { imgurl: "", text: "热门直播" },
      { imgurl: "", text: "同城服务" },
      { imgurl: "", text: "吃喝玩乐" },
      { imgurl: "", text: "腾讯课堂" }
    ],
    currentIndex: 0,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  selectTab: function (e) {
    console.log(e);
    var idx = e.currentTarget.dataset.idx;
    var objIndex = {};
    this.setData({
      currentIndex: idx
    });
    objIndex.index = idx;
    if(objIndex.index == 0){
      wx.navigateTo({
        url: 'String',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }else if(objIndex.index == 1){
        wx.navigateTo({
          url: 'String',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }else if(objIndex.index == 2){
      console.log(1);
      wx.navigateTo({
        url: '../interPart/interPart',//跳转到非tabBar的页面
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
  }
})