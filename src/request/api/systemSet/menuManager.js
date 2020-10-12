// 具体api接口方法

import base from '../../baseUrl' // 导入接口域名列表
import axios from '../../http' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const menuManager = {
  // 列表
  list(params) {
    return axios.post(`${base.dev}/menu/Page`, params)
  },
  detail(id) {
    return axios.get(`${base.dev}/menu/Get/{${id}}`)
  },
  upDate(params) {
    return axios.post(`${base.dev}/menu/Post`, params)
  }
}

export default menuManager
