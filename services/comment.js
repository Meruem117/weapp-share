const request = require('../utils/request')

async function getAll() {
  const data = await request.get('/comment/all')
  return data
}

async function getPages(commentPageRequest) {
  const data = await request.get('/comment/list', commentPageRequest)
  return data
}

module.exports = {
  getAll,
  getPages
}