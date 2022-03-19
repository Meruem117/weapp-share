function getData() {
  let data = []
  wx.request({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    // data: {},
    // header: {
    //   'content-type': 'application/json'
    // },
    success(res) {
      data = res.data
      console.log(data)
    }
  })
}

module.exports = {
  getData
}