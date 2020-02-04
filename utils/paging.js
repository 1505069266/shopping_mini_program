import { Http } from "./http";

class Paging{
  //不关系细节

  start
  count
  req
  locker = false
  url
  moreData
  accumulator

  constructor(req, count=10, start=0){
    this.count = count
    this.start = start
    this.req = req
    this.url = req.url
  }
  async getMoreData(){
    //生成器 Generator
    //getLocker
    //request
    //releseLocker
    if(!this.getLocker()){
      return
    }
    const data = await this._actualGetData()
    this.releaseLocker()
    return data
  }

  async _actualGetData(){
    const req = this._getCurrentReq()

    let paging = await Http.request(req)
    if(!paging){
      return null
    }

    if(paging.total === 0){
      return {
        empty: true,
        items: [],
        moreData: false,
        accumulator: []
      }
    }

    this.moreData = this._moreData(paging.total_page, paging.page)
    if(this.moreData){
      this.start += this.count
    }
    this._accumulator(paging.items)
    return {
      empty: false,
      items: paging.items,
      moreData: this.moreData,
      accumulator: this.accumulator
    }

  }
  _accumulator(items){
    this.accumulator = this.accumulator.concat(items)
  }

  _moreData(totalPage, pageNum){
    return pageNum < totalPage-1
  }

  _getCurrentReq(){
    let url = this.url
    let params = `start=${this.start}&count=${this.count}`
    if(url.indexOf("?") > -1){
      url += '&' + params
    }else{
      url += '?' + params
    }
    this.req.url = url
    return this.req
  }

  getLocker(){
    if(this.locker){
      return false
    }
    this.locker = true
    return true
  }

  releaseLocker(){
    this.locker = false
  }
}