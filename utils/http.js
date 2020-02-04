/**
 * @anthor lebaba
 */
import {config} from './../config/config.js'
import {promisic} from './util.js'
class Http{
  static async request({url, data, method='GET'}){
    //wx.request
     const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      // header: {
      //   appkey: config.appkey
      // }
    })
    return res.data
  }
}



//动态类型  非常常见  python
// 不常见  java  C# 委托  

export {
  Http
}