// /api/Patient/getMyDoctor
import http from '@/utils/request'

// /api/doctor
export const getMyDoctor = (params) => {
    return http({
      url: '/api/Patient/getMyDoctor',
      method: 'post',
      data:params
    })
  }
export const patientDetail = (params) => {
    return http({
      url: 'api/doctor/patientDetail',
      method: 'post',
      data:params
    })
  }
export const addPatient = (params) => {
    return http({
      url: '/api/doctor/addPatient',
      method: 'post',
      data:params
    })
  }