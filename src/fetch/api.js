import axios from 'axios'
import qs from 'qs'
import { URLS } from './urls'
// 设置请求超时时长
axios.defaults.timeout = 50000
// 表单提交 post 方式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config) => {
  // post 提交时 将请求数据 序列化
  if (config.method.toLowerCase() === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => { // 失败时
  return Promise.reject(error)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    function handleResponse (resolve, response) {
      const _body = response.data || response
      resolve(_body)
    }
    if (!params) {
      axios.get(url)
        .then(response => {
          handleResponse(resolve, response)
        }, err => {
          // console.log(`调用${url}错误:`, err)
          reject(err)
        }).catch((error) => {
          // console.log(`调用${url}异常:`, error)
          reject(error)
      })
    } else {
      axios.post(url, params)
        .then(response => {
          // 调用接口返回的数据
          handleResponse(resolve, response)
        }, err => {
          // console.log(`调用${url}错误:`, err)
          reject(err)
        }).catch((error) => {
          // console.log(`调用${url}异常:`, error)
          reject(error)
      })
    }
  })
}

export function paramsFun (params) {
  let _params = {};
  for (let key in params) {
    _params[key] = params[key];
  }
  return _params;
}

export default {
  getStickNews ({pageNo, pageSize, type, isPush}) {
    let urls = `${URLS.GETPUSHNEWS}?pageNo=${pageNo}&pageSize=${pageSize}&type=${type}&isPush=${isPush}`
    return fetch(urls)
  },
  getAllNews ({pageNo, pageSize}) {
    let urls = `${URLS.GETALLNEWS}?pageNo=${pageNo}&pageSize=${pageSize}`
    return fetch(urls)
  },
  getNewsDetail (id) {
    // debugger
    let urls = `${URLS.GETNEWSDETAILS}?id=${+id}`
    return fetch(urls)
  },
  getAllVideo ({pageNo, pageSize}) {
    let urls = `${URLS.GETALLVIDEOS}?pageNo=${pageNo}&pageSize=${pageSize}`
    return fetch(urls)
  }
}
