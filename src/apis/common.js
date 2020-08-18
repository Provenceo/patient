// /api/Patient/upFiles
import http from '@/utils/request'

export const upFiles = (params) => {
  var form = new FormData()

  function isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
  }
  if (isArray(params)) {
    params.forEach(item => {
      form.append('file[]', item.file)
    });
  } else {
    form.append('file[]', params.file)
  }
  // form.append('file[]', arr)
  // console.log(params.file)
  return http({
    url: '/api/Patient/upFiles',
    method: 'post',
    data: form,
    config: 'formData'
  })
}
export const addMedia = (params) => {
  return http({
    url: '/api/upFiles/addMedia',
    method: 'post',
    data: params,
  })
}
