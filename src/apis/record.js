import http from '@/utils/request'

export const addbingli = (params) => {
  return http({
    url: '/api/doctor/addbingli',
    method: 'post',
    data: params
  })
}
export const bingli = (params) => {
  return http({
    url: '/api/doctor/bingli',
    method: 'post',
    data: params
  })
}
