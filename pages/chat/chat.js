var data = require('../home/home.js');
console.log(data);
Page({
    data: data,
    onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);

  },
});


