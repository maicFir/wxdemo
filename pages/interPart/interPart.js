// pages/interPart/interPart.js
Page({
  data: {
    navTab: [
      { name: "nav-friend", text: "兴趣圈", iselected: 1 },
      { name: "nav-near", text: "最近", iselected: 0 },
      { name: "nav-ph", text: "排行", iselected: 0 },
      { name: "nav-find", text: "发现", iselected: 0 },
    ],
    currentIndex: 0,
    navFriend: [
      { "title": "新航母真身曝光：和之前的想象完全", img1: "http://n.sinaimg.cn/mil/transform/20170318/6yX--fycnyhk9018950.jpg", img2: "http://n.sinaimg.cn/mil/transform/20170318/xCZ7-fycnyhk9025677.jpg", img3: "http://n.sinaimg.cn/mil/transform/20170318/E-n6-fycnyhk9019994.jpg" },
      { "title": "坏消息，一夜之间多了很多叔叔", img1: "https://ks.sinaimg.cn/n/news/transform/20170318/gR1H-fycnyhk8932913.jpg/w640h320z1l50t192b.jpg", img2: "http://n.sinaimg.cn/news/transform/20170318/YOId-fycnyhk8899116.jpg", img3: "http://n.sinaimg.cn/news/transform/20170318/IZ9w-fycnyhk8900493.jpg" },
      { "title": "新航母真身曝光：和之前的想象完全", img1: "https://ks.sinaimg.cn/n/blog/20170317/Rrxu-fycnyhk8157248.jpg/w640h320z1l50t1554.jpg", img2: "https://ks.sinaimg.cn/n/tech/transform/20170318/ySx0-fycnyhk8779105.jpg/w640h320z1l50t1c6c.jpg", img3: "https://ks.sinaimg.cn/n/sports/transform/20170318/ly1W-fycnyhk9159186.jpg/w640h320z1l50t15d7.jpg" },
      { "title": "农村大妈辛苦捡菜，菜贩子转手转卖", img1: "https://ks.sinaimg.cn/n/mil/transform/20170318/-8Dv-fycnyhk8943140.jpg/w600h300z1l1t11bc.jpg", img2: "https://ks.sinaimg.cn/n/mil/transform/20170318/-8Dv-fycnyhk8943140.jpg/w600h300z1l1t11bc.jpg", img3: "https://ks.sinaimg.cn/n/mil/transform/20170318/QuCy-fycnyhk8818879.jpg/w600h300z1l1t1f5a.jpg" },
    ],
    navNear: {
      info: { img: "http://n.sinaimg.cn/sinacn/20170105/482c-fxzkfuh5411881.jpg", name: "老司机", huati: "部落话题" }
    },
    imgUrls: [   'https://ks.sinaimg.cn/n/photo/20170319/IZ7w-fycnyhk9382951.jpg/w640h320z1l50t13e0.jpg',
'https://ns.sinaimg.cn/sinanews/transform/20170313/lNv3-fychhus1029739.jpg',
'https://ks.sinaimg.cn/n/photo/20170319/--_V-fycnyhk9273518.jpg/w640h320z1l50t15b3.jpg'
    ],
    indicatorDots: false,//点
    autoplay: false,//是否自动播放
    interval: 5000,
    duration: 1000
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
  },
  onPullDownRefresh: function () {

  }
})