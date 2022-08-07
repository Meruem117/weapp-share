const request = require('../utils/request')

/**
 * 登录
 */
async function login(params) {
  const data = await request.post('/security/login', params)
  return data
}

module.exports = {
  login
}