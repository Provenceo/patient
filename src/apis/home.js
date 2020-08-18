import http from '@/utils/request'

// /api/doctor
export const home = () => {
  return http({
    url: '/api/Patient/index',
    method: 'post',
  })
}
export const getTherapeutic = (params) => {
  return http({
    url: '/api/Patient/getTherapeutic',
    method: 'post',
    data: params
  })
}
