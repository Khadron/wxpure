import wstore from '../lib/westore/index'
import userInfo from './modules/userInfo'

let data = {}
data = Object.assign(data, userInfo)
const store = {
  data,
  updateAll: false // 默认 false，为 true 会无脑更新所有实例
}

export default (options, isComponent) => {
  if (isComponent) {
    options.pure = true
    wstore.create(options)
  } else {
    wstore.create(store, options)
  }
}
