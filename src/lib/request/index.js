const methods = ['options', 'get', 'head', 'post', 'put', 'delete', 'trace', 'connect']

export default interceptors => {
  if (wx && wx.request) {
    const { request } = wx
    const handler = params => {
      const obj = { ...params }
      const { success } = obj
      const { fail } = obj
      return new Promise((resolve, reject) => {
        request(Object.assign(obj, {
          success(res) {
            try {
              if (success && typeof success === 'function') {
                success(res)
              }
              resolve(res)
            } catch (e) {
              if (fail && typeof fail === 'function') {
                fail(e)
              }
              reject(e)
            }
          },
          fail(err) {
            if (fail && typeof fail === 'function') {
              fail(err)
            }
            reject(err)
          }
        }))
      })
    }
    const nrequest = function(params = {}) {
      if (interceptors) {
        const { aspects } = interceptors
        for (let i = 0, len = aspects.length; i < len; i++) {
          if (!aspects[i]({ url: params.url, method: params.method, header: params.header, data: params.data })) {
            return
          }
        }
      }
      return handler(params)
    }
    methods.forEach(method => {
      nrequest[method] = params => {
        return handler(params)
      }
    })
    wx.request = nrequest
  }
}
