// const baseUrl = 'http://localhost:8080'
const baseUrl = 'http://192.168.1.102:8080'

module.exports = {
  get: function (api, data = {}) {
    const url = baseUrl + api
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: 'GET',
        data,
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  post: function (api, data = {}) {
    const url = baseUrl + api
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: 'POST',
        data,
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
}