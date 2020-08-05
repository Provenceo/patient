import http from '@/utils/request'

// /api/doctor
export const home = () => {
    return http({
      url: '/api/Patient/index',
      method: 'post',
    })
  }