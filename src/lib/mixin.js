export default exts => {
  const customWX = Object.assign({}, exts)
  Object.keys(wx).forEach(key => {
    customWX[key] = wx[key]
  })
  wx = customWX
}
