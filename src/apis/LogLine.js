import http from '@/utils/request'
// 用户登录
export const getHealthLogLine = () => {
  return http({
    url: '/api/Patient/getHealthLogLine',
    method: 'post',
  })
}