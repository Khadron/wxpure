/* eslint-disable import/named */
import config from '../config'

const baseUrl = config.baseUrl.replace(/\/$/, '')
console.log('API HOST:', baseUrl)
export default function(method, url, data, loading = true) {
  url = url.replace(/^\//, '')
  if (loading) {
    wx.showLoading({ title: '加载中...' })
  }
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('token') || ''
    console.log('-----')
    console.log('<<< API Request:', `url: ${url}, `, `method: ${method}, `)
    console.log('data:')
    console.dir(data)
    wx.request({
      url: `${baseUrl}/${url}`,
      method: method || 'get',
      data,
      dataType: 'json',
      header: {
        'content-type': 'application/json',
        charset: 'utf-8',
        token
      },
      success(res) {
        console.log('>>> API Response-OK:')
        console.dir(res.data)
        console.log('-----')
        resolve(res.data, res.statusCode, res)
      },
      fail: err => {
        console.log('>>> API Response-Failed:')
        console.dir(err)
        console.log('-----')
        wx.showToast({
          title: err.errMsg,
          icon: 'none'
        })
        reject(err)
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
}
