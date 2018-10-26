//logs.js
const util = require('../../utils/util.js')
var categoryData = require('../../utils/categoryData.js')

Page({
  data: {
    categoryData: [],
  },
  onLoad: function () {
    this.setData({
      categoryData: categoryData.categoryData
    })
    console.log(this.data.categoryData)
  },
})
