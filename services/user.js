import {
  API_HOST
} from '../constant'

function getData() {
  let data = []
  wx.request({
    url: API_HOST + '/user/all',
    success(res) {
      data = res.data
      console.log(data)
    }
  })
}

module.exports = {
  getData
}