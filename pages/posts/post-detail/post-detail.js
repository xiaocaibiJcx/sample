import postList from '../../../data/posts-data.js'
const appInstance = getApp()
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
    this.data.collectionId = options.id
    this.data.isMusic = false; //音乐暂停
    this.setData({
      isMusic: this.data.isMusic
    })
    let detailItem = postList.postList[options.id]
    this.setData({
      detail: detailItem
    })
    let collectionobj = wx.getStorageSync('collection_current')
    if (collectionobj) {
      if (collectionobj[options.id]) {
        let postCollectioned = collectionobj[options.id]
        this.setData({
          collectionStatus: postCollectioned
        })
      }
    } else {
      let postCollectioned = {}
      postCollectioned[options.id] = false
      wx.setStorageSync('collection_current', postCollectioned)
    }
    if (appInstance.g_isPlayingMusic && appInstance.g_currntPostId === options.id) {
      this.setData({
        isMusic: true
      })
    }
    this._setMusicStatus()
   
  },
  // 这是音乐播放状态
  _setMusicStatus() {
    let that = this
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.onPlay(() => {
      that.setData({
        isMusic: true
      })
      appInstance.g_isPlayingMusic = true;
      appInstance.g_currntPostId = that.data.collectionId
    })

    backgroundAudioManager.onPause(() => {
      that.setData({
        isMusic: false
      })
      appInstance.g_isPlayingMusic = false;
      appInstance.g_currntPostId = null;
    })
    backgroundAudioManager.onEnded(() => {
      that.setData({
        isMusic: false
      })
      appInstance.g_isPlayingMusic = false;
      appInstance.g_currntPostId = null;
    })
  },
  onCollectionTap(event) {
    let postsCollectioned = wx.getStorageSync('collection_current')
    let postCollectioned = postsCollectioned[this.data.collectionId]
    //取消反取消
    postCollectioned = !postCollectioned
    // 更新储存数据
    postsCollectioned[this.data.collectionId] = postCollectioned
    wx.setStorageSync('collection_current', postsCollectioned)
    // 更新视图数据
    this.setData({
      collectionStatus: postCollectioned
    })
    wx.showToast({
      title: postCollectioned ? '收藏成功' : '取消成功',
      icon: 'success',
      duration: 2000
    })
  },
  // 分享
  onShareTap() {
    const itemList = ['分享给好友', '分享给朋友圈', '分享给QQ好友']
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#405f80',
      success(res) {
        wx.showModal({
          title: '',
          content: itemList[res.tapIndex],
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })

      }
    })
  },
  // 音乐播放
  audioTap(event) {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    if (this.data.isMusic) {
      backgroundAudioManager.pause()
      this.data.isMusic = false
      this.setData({
        isMusic: this.data.isMusic
      })
    } else {
      backgroundAudioManager.title = postList.postList[this.data.collectionId].music.songs
      backgroundAudioManager.coverImgUrl = postList.postList[this.data.collectionId].music.musicImg
      backgroundAudioManager.src = postList.postList[this.data.collectionId].music.url
      // backgroundAudioManager
      this.data.isMusic = true
      this.setData({
        isMusic: this.data.isMusic
      })
    }
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
    this.setData({
      isMusic: this.data.isMusic ? true : false
    })
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