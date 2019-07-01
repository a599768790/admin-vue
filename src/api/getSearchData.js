import request from '@/utils/http'

export function getsearchData (id) {
  return request({
    url: '/api/detail.json',
    method: 'get',
    data: {
      id: id
    }
  })
}
