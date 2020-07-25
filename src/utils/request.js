import axios from 'axios' // 引入axios
import apiConfig from "../../config/api.config"
import router from '@/router'
// 将 aioxs 封装为 vue 的插件
// create an axios instance
const service = axios.create({
  baseURL: apiConfig.baseUrl, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})
axios.defaults.headers.post['Content-Type'] = 'application/json';
if (router.history.current.path !== '/login') {
  // 在请求头中添加 Authorization
  // 进行局部设置
  axios.defaults.headers['Authorization'] = window.sessionStorage.getItem('token') || ''
}
// 在 axios 的拦截器中添加一段内容：
service.interceptors.request.use(function (config) {
  // 只要在请求非 login 时才需要执行
  if (config.method == 'post') {
    config.params = {
      t: `${Date.parse(new Date()) / 1000}${Math.round(Math.random() * 10)}`
    }
  }
  return config

}, function (error) {
  return Promise.reject(error)
})
service.interceptors.response.use(
  response => {
    //拦截响应，做统一处理 
    switch (response.data.codes) {
      case 401:
        router.push('/WechatAuthorization');
        break;
    }
    return response
  }, //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error) // 返回接口返回的错误信息
  })

async function request(options) {
  // 这里主要是post方法的封装，get方法同理
  options.method = 'post'
  if (options.config === 'formData') {
    options.headers = {
      'Content-Type': 'multipart/form-data'
    }
  } else {
    // options.data = qs.stringify(options.data)
    options.data
  }
  return new Promise((resolve, reject) => {
    service(options).then(response => {
      //  这里主要根据后来返回的数据作判断，请根据实际情况
      if (response.data.codes === 200) {
        let res = response.data;
        resolve(res)
      } else {
        reject(response.data)
      }
    }).catch(error => {
      reject(error)
      // 显示拦截器对respone处理后的可读错误
    })
  })
}

export default request
