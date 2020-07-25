import http from '@/utils/request'

// /api/doctor
export const patient = (params) => {
    return http({
      url: '/api/doctor/patient',
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