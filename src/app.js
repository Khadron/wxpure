import mixin from './lib/mixin'
import request from './lib/request/index'
import intercepts from './lib/request/intercepters'

App({
  onLaunch() {
    console.log('wx原型', Object.keys(wx).length)
    mixin()
    console.log('mixin后', Object.keys(wx).length)
    // 授权验证
    intercepts.use(({ url }) => {
      if (url && url.indexOf('login') < 0) {
        if (!wx.getStorageSync('token')) {
          wx.redirectTo({
            url: '/pages/login/index'
          })
          return false
        }
      }
      return true
    })
    request(intercepts)
  },
  onUnLaunch() {
    wx.clearStorage()
  },
  onError(err) {
    console.error(err)
  },
  globalData: {
    userInfo: null
  }
})
