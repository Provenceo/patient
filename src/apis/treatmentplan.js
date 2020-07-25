import http from '@/utils/request'

export const addfangan = (params) => {
  return http({
    url: '/api/doctor/addfangan',
    method: 'post',
    data: params
  })
}
export const fangan = (params) => {
  return http({
    url: 'api/doctor/fangan',
    method: 'post',
    data: params
  })
}
