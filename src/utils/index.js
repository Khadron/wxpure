/* eslint-disable no-use-before-define */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const convertToYuan = cent => {
  const unit = 100
  const yuan = cent / unit
  return yuan
}

module.exports = {
  formatTime,
  formatNumber,
  convertToYuan
}
