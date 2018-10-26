//index.js
//获取应用实例
const app = getApp()
var tData = require('../../utils/indexTestData.js')
Page({
  data: {
    height: '',
    postData: [],
    lowerData: [],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    interval: 5000,
    duration: 1000,
    autoplay: true,

  },
  onLoad: function() {
    this.setData({
      postData: tData.postData
    })
  },
})