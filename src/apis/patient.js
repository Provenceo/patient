import http from '@/utils/request'

// /api/doctor
export const getHealthLog = (params) => {
  return http({
    url: '/api/Patient/getHealthLog',
    method: 'post',
    data: params
  })
}
export const getHealthLogList = () => {
  return http({
    url: '/api/Patient/getHealthLogList',
    method: 'post',
  })
}
// 食物成分
export const getFood = () => {
  return http({
    url: '/api/Patient/getFood',
    method: 'post',
  })
}
// 提交健康日志
export const addHealthLog = (params) => {
  return http({
    url: '/api/Patient/addHealthLog',
    method: 'post',
    data: params
  })
}
// 健康日志详情
export const getHealthLogDetail = (params) => {
  return http({
    url: '/api/Patient/getHealthLogDetail',
    method: 'post',
    data: params
  })
}
