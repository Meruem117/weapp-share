const request = require('../utils/request')

async function getAll() {
  const data = await request.get('/comment/all')
  return data
}

module.exports = {
  getAll
}