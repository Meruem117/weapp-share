const request = require('../utils/request')

async function getAll() {
  const data = await request.get('/comment/all')
  return data
}

async function getSearchPages(pageSearchRequest) {
  const data = await request.get('/comment/list', pageSearchRequest)
  return data
}

module.exports = {
  getAll,
  getSearchPages
}