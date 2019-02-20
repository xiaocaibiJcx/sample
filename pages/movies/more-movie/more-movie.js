const app = getApp()
import {http,setStars} from '../../../utils/utils.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:0,
    api: app.globalData.g_base,
    moviesList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.natigateTitle = options.natigateTitle
    let data = {
      '正在热映': this.data.api + '/v2/movie/in_theaters',
      '即将上映': this.data.api + '/v2/movie/coming_soon',
      '豆瓣Top250': this.data.api + '/v2/movie/top250'
    }
    http(data[options.natigateTitle], this._formatData)
    this.data.nextUrl = data[options.natigateTitle]
  },
  _formatData(data) {
    let movies = []
    for (let i in data) {
      let item = {
        movieId: data[i].id,
        title: data[i].title.length >= 6 ? data[i].title.substring(0, 6) + '...' : data[i].title,
        coverage: data[i].images.large,
        scoreNum: data[i].rating.average,
        scoreStar: setStars(data[i].rating.stars)
      }
      movies.push(item)
    }

    // let readyData ={}
    this.data.moviesList = [...this.data.moviesList,...movies]
    this.setData({
      readyData: this.data.moviesList
    })
    this.data.pageNum +=20
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  },
  onReachBottom(e) {
    let nextUrl = `${this.data.nextUrl}?start=${this.data.pageNum}&count=20`
    http(nextUrl, this._formatData)
    wx.showNavigationBarLoading()
  },
  onPullDownRefresh() {
    this.data.moviesList = []
    let refreshUrl = `${this.data.nextUrl}?start=0&count=20`
    http(refreshUrl, this._formatData)
    wx.showNavigationBarLoading()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.natigateTitle,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function() {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function() {

  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
      console.log(1)
  }
})