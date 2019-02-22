const app = getApp()
import {
  http,
  setStars,
  convertToCastString,
  converToCastInfos
} from '../../../utils/utils.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let url = `${app.globalData.g_base}/v2/movie/subject/${options.id}`
    http(url, this._getMovieDetail)
  },
  _getMovieDetail(data) {
    if (!data) {
      return
    }
    let director = {
      avatar: '',
      name: '',
      id: ''
    }
    if (data.directors[0] != null) {
      if (data.directors[0].avatars != null) {
        director.avatar = data.directors[0].avatars.large;
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id;
    }
    let movie = {
      movieImg: data.images ? data.images.large : '',
      country: data.countries[0],
      title: data.title,
      originalTitle: data.original_title,
      wishCount: data.wish_count,
      commentsCount: data.comments_count,
      year: data.year,
      generes: data.genres.join('、'),
      stars: setStars(data.rating.stars),
      score: data.rating.average,
      director: director,
      casts: convertToCastString(data.casts),
      castsInfo: converToCastInfos(data.casts),
      summary: data.summary
    }
    this.setData({
      movie: movie
    })
  },
  enlargeImg(e) {
    let url = e.currentTarget.dataset.imgurl
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})