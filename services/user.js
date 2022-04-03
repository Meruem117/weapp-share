const request = require('../utils/request')

async function getAll() {
  const data = await request.get('/user/all')
  return data
}

async function getUserById(id) {
  const data = await request.get('/user/get', {
    id
  })
  return data
}

module.exports = {
  getAll,
  getUserById
}