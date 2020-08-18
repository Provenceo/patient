// /api/Patient/getMyDoctor
import http from '@/utils/request'

// /api/doctor
export const getMyInfo = (params) => {
  return http({
    url: '/api/Patient/getMyInfo',
    method: 'post',
    data: params
  })
}
export const getMyDoctor = (params) => {
  return http({
    url: '/api/Patient/getMyDoctor',
    method: 'post',
    data: params
  })
}

export const patientDetail = (params) => {
  return http({
    url: 'api/doctor/patientDetail',
    method: 'post',
    data: params
  })
}
export const addPatient = (params) => {
  return http({
    url: '/api/doctor/addPatient',
    method: 'post',
    data: params
  })
}

export const getMyRecordList = () => {
  return http({
    url: '/api/Patient/getMyRecordList',
    method: 'post'
  })
}
export const getMyRecordDetail = (params) => {
  return http({
    url: '/api/Patient/getMyRecordDetail',
    method: 'post',
    data: params
  })
}
export const getMyPlanList = (params) => {
  return http({
    url: '/api/Patient/getMyPlanList',
    method: 'post',
    data: params
  })
}
export const getMyPlanDetail = (params) => {
  return http({
    url: '/api/Patient/getMyPlanDetail',
    method: 'post',
    data: params
  })
}
export const getMyNutritionList = () => {
  return http({
    url: '/api/Patient/getMyNutritionList',
    method: 'post'
  })
}
export const getMyNutritionDetail = (params) => {
  return http({
    url: '/api/Patient/getMyNutritionDetail',
    method: 'post',
    data: params
  })
}