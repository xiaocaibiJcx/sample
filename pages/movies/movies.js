const app = getApp()
import {setStars} from '../../utils/utils.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchPage: false,
    searchArr: [],
    api: app.globalData.g_base,
    moviesList: [],
    navTitleArr: [],
    inTheaTers: [],
    coming: [],
    hot: []
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    let parameter = '?start=0&count=3'
    let inTheaTersUrl = this.data.api + '/v2/movie/in_theaters' + parameter; //正在上映
    let comingUrl = this.data.api + '/v2/movie/coming_soon' + parameter; //即将上映
    let hotUrl = this.data.api + '/v2/movie/top250' + parameter; //热门
    this._getMovieData(inTheaTersUrl, 'inTheaTers', '正在热映')
    this._getMovieData(comingUrl, 'coming','即将上映')
    this._getMovieData(hotUrl, 'hot', '豆瓣Top250')
  },
  _getMovieData(url, key, navTitle,searchStatus) {
    let that = this
    wx.request({
      url: url,
      data: {},
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success(res) {
        that._formatData(res.data.subjects, key, navTitle,searchStatus)
      },
      fail(res) {

      },
    })
  },
  _formatData(data, key,navTitle,searchStatus) {
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
    if (searchStatus) {
      this.setData({
        movie: movies
      })
      return
    }
    // let readyData ={}
    this.data.moviesList.push({
      navTitle,
      movies})
    this.data.navTitleArr.push(navTitle)
    // readyData[key] = movies
    // this.setData(this.data.moviesData)
    this.setData({
      readyData: this.data.moviesList,
    })
    
  },
  //跳转更多
  onmoreMovie(e) {
    this.data.searchTitle = e.currentTarget.dataset.title
    let title = e.currentTarget.dataset.title
    wx.navigateTo({
      url: 'more-movie/more-movie?natigateTitle=' + title
    })  
  },
  // 搜索
  onBindFocus(e) {
    this.setData({
      searchPage: true
    })
  },
  // 搜索确定
  onBindconFirm(e) {
    let url = `${this.data.api}/v2/movie/search?q=${e.detail.value}` 
    this._getMovieData(url, 'hot', '2', true)
  },
  // 关闭搜索
  catchTapShut() {
    this.setData({
      searchPage: false,
       movie: []
    })
  },
  // 查看电影详情
  tapMovieDetail(e) {
    console.log()
    wx.navigateTo({
      url: `movie-detail/movie-detail?id=${e.currentTarget.dataset.movieid}`,
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