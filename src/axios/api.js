/**
 * Created by Administrator on 2018/3/8.
 */
import Axios from 'axios'
import {Message, Loading} from 'element-ui'
let loadingInstance

const CancelToken = Axios.CancelToken

// request拦截器
Axios.interceptors.request.use(
  config => {
    console.log('请求开始')
    // 全屏Loading
    loadingInstance = Loading.service({ fullscreen: true })
    return config
  },
  error => {
    // request error
    console.log(error)
    Promise.reject(error)
  }
)
Axios.interceptors.response.use(
  response => {
    if (
      typeof response.data === 'string' &&
      response.data.indexOf('xmlns') > -1
    ) {
      response.status = 302
    }
    loadingInstance.close()
    switch (response.status) {

      case 302:
        // 可能登录超时
        console.log('ccc')
        // window.location.href = window.location.origin + '/logout'
        break
      case 401:
        // 可能登录超时
        window.location.href = window.location.origin + '/logout'
        break
      case 404:
        // 404
        window.location.href = '../views/pages/error404.vue'
        break
      case 500:
        // 502
        window.location.href = '../views/pages/500.vue'
        break
      case 502:
        // 502
        window.location.href = '../views/pages/error.vue'
        break
    }
    const res = response.data
  }
)
