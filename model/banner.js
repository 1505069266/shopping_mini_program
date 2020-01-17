/**
 * @anthor lebaba
 */

import { Http } from './../utils/http.js'
class Banner{
  static location = 'b-1'

  static async getHomeLocationB(){
    return await Http.request({
      url: `banner/name/${Banner.location}`,
    })
  }
}

export {
  Banner
}