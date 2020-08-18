import http from '@/utils/request'

// 健康日志详情
// 
export const getHealthLogDetail = (params) => {
  return http({
    url: '/api/Patient/getHealthLogDetail',
    method: 'post',
    data: params
  })
}

