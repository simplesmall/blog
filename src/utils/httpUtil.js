/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
import {Message, Loading} from 'element-ui'
import {MessageBox} from 'element-ui'
import router from '../router/index'
import {statusMessage, codeList} from '@/utils/request-code'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  headers: {}
})
let loading // 定义loading变量
function startLoading() { // 使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading() { // 使用Element loading-close 方法
  loading.close()
}

// 那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 组合生成对一个url
    config.headers['x-req-flag'] = 1
    config.authToken ? config.headers['authToken'] = config.authToken : ''
    if (config.contentType) {
      if (config.contentType === 1) {
        config.headers['Content-Type'] = 'multipart/form-data'
      } else {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
      }
      if (config.method === 'post') {
        config.data = qs.stringify(config.data)
      }
    }
    if (config.showLoading === 1) {
      showFullScreenLoading()
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    if (response.config.showLoading === 1) {
      tryHideFullScreenLoading()
    }
    return response
  },
  (error) => {
    return error.response
  }
)
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response['data']
  }
  const errortext = statusMessage[response.status] || response.statusText
  const error = new Error(errortext)
  error.status = response.status
  error.response = response
  throw error
}
const checkCode = (res) => {
  // 检查与服务器端协定的code是否正确
  const errorCodeMsg = codeList[res.code]
  if (errorCodeMsg) {
    const error = new Error(res.message)
    error.code = res.code
    error.codeErrorCtx = res
    throw error
  } else {
    return res
  }
}

const fetch = ({url, data, params, method, contentType, iiotType, authToken, showLoading}) => {
  return service({
    url,
    method,
    data,
    params,
    contentType,
    iiotType,
    authToken,
    showLoading
  })
    .then(checkStatus)
    .then(checkCode)
    .catch((error) => {
      const {status, code} = error
      if (status) {
        switch (status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            // router.replace({
            //   path: '/login',
            //   query: { redirect: router.currentRoute.fullPath }
            // })
            break
          case 403:
            break
          case 404:
            // router.push('/404')
            break
          // 其他错误，直接抛出错误提示
          default:
            Message({
              message: error.message,
              type: 'error',
              duration: 4 * 1000
            })
        }
      }
      // error code 对应操作
      if (code) {
        switch (code) {
          case 10001:
            Message({
              message: `${error.message}`,
              type: 'error',
              duration: 4 * 1000
            })
            router.replace({
              path: '/login',
              query: {}
            })
            break
          case 10008:
            MessageBox.alert('会话已超时，请重新登录', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                router.replace({
                  path: '/login',
                  query: {
                    redirect: router.currentRoute.fullPath
                  }
                })
              }
            })
            break
          default:
            Message({
              message: `${error.message}`,
              type: 'error',
              duration: 4 * 1000
            })
        }
      }
    })
}
export default fetch
