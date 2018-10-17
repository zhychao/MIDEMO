//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.request({
      url: 'http://dev.joinpay.cc:8081/gateway/mobile/mobilePay_build.action', //仅为示例，并非真实的接口地址
      data: {
        x: '1',
        y: '111'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})