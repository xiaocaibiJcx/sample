// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: 'Sep 13 2'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let content_lit = [{
      avater: '/images/author/author_1.jpg',
      date: new Date().getMilliseconds(),
      title: '锦瑟',
      image: '/images/wx_1.jpg',
      content: '锦瑟无端五十弦，一弦一柱思华年;庄生晓梦迷蝴蝶，望帝春心托杜鹃;沧海月明珠有泪，蓝田日暖玉生烟;此情可待成追忆？只是当时已惘然;',
      star_num: 23,
      commont_num: 34
    }, {
      avater: '/images/author/author_2.jpg',
        date: new Date().getMilliseconds(),
      title: '离思五首·其四',
      image: '/images/wx_2.jpg',
      content: '曾经沧海难为水，除却巫山不是云。取次花丛懒回顾，半缘修道半缘君。',
      star_num: 23,
      commont_num: 34
    }, {
      avater: '/images/author/author_3.jpg',
        date: new Date().getMilliseconds(),
      title: '白头吟',
      image: '/images/wx_3.jpg',
      content: '皑如山上雪，皎若云间月。闻君有两意，故来相决绝。今日斗酒会，明旦沟水头。躞蹀御沟上，沟水东西流。凄凄复凄凄，嫁娶不须啼。愿得一心人，白头不相离。竹竿何袅袅，鱼尾何簁簁！男儿重意气，何用钱刀为！',
      star_num: 23,
      commont_num: 34
    }, {
      avater: '/images/author/author_4.jpg',
        date: new Date().getMilliseconds(),
      title: '折桂令·春情',
      image: '/images/wx_1.jpg',
      content: '平生不会相思，才会相思，便害相思。身似浮云，心如飞絮，气若游丝。空一缕余香在此，盼千金游子何之。证候来时，正是何时？灯半昏时，月半明时。',
      star_num: 23,
      commont_num: 34
    }, {
      avater: '/images/author/author_5.jpg',
        date: new Date().getMilliseconds(),
      title: '望月怀远',
      image: '/images/wx_2.jpg',
      content: '海上生明月，天涯共此时。情人怨遥夜，竟夕起相思。灭烛怜光满，披衣觉露滋。不堪盈手赠，还寝梦佳期。',
      star_num: 23,
      commont_num: 34
    }]
    this.setData({
      content_key: content_lit
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