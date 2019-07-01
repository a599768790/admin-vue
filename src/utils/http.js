import axios from 'axios'
import process from '@/utils/model.js'
// create an axios instance
const service = axios.create({
  baseURL: process.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    // "Authorization": "22",
    'Content-Type': 'application/json-patch+json'

  },
  params: {
    // 此处注意，你的`params`应该是个对象，不能是其他数据类型
    ...(config.params || {}),
    _: +new Date()
  }
}))
// response interceptor
service.interceptors.response.use(
  response => {
    const __data = response.data
    if (__data.ErrorMessage != null && __data.ErrorMessage !== undefined && __data.ErrorMessage !== '') {
      console.log(__data.ErrorMessage)
      return Promise.reject(__data.ErrorMessage)
    } else {
      return Promise.resolve(__data.Body)
    }
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)
export default service
