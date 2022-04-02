const {
  API_HOST
} = require('../constant/index')

async function getAll() {
  let data = []
  wx.request({
    url: API_HOST + '/comment/all',
    success(res) {
      data = res.data
    }
  })
  return data
}

module.exports = {
  getAll
}