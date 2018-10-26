//logs.js
const util = require('../../utils/util.js')
var shopCarData = require('../../utils/shopCar.js')

Page({
  data: {
    shopCarData: [],
  },
  onLoad: function () {
    this.setData({
      shopCarData: shopCarData.shopCarData
    })
    console.log(this.data.shopCarData)
  },
})
