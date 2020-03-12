import baseApi from './base'

const getSampleApi = (success, fail) => {
  return baseApi('GET', '/sample/')
}

module.exports = {
    getSampleApi
}
