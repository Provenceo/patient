import http from '@/utils/request'
// 用户登录
export const login = (params) => {
  return http({
    url: '/api/oauth/userlogin',
    method: 'post',
    data: params
  })
}
export const oauth = (params) => {
  return http({
    url: '/api/oauth',
    method: 'post',
    data: params
  })
}
