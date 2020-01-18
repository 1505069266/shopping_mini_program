// pages/home/home.js
/**
 * @anthor 朱晓乐
 */
import {Theme} from './../../model/theme.js'
import {Banner} from './../../model/banner.js'
import {config} from '../../config/config'
import {Http} from '../../utils/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner1:null,
    topTheme:null,
    grid: []
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.initAllDate()
  },

  async initAllDate(){
    let banner1 = await Http.request({url: 'banner.json'})
    let res = await Http.request({url:'theme.json'})
    let category = await Http.request({url:'category.json'})
    let activity = await Http.request({url:'activity.json'})
    let spu = await Http.request({url:"spu.json"})
    let title = await Http.request({url: "themes.json"})
    console.log(spu)
    this.setData({
      banner1: banner1,
      topTheme: res[0],
      grid: category,
      activity,
      spu,
      title_img:title[1].title_img
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})