const request = require('../utils/request')

/**
 * 加载全部
 * @returns {Promise<BaseResponse<UserItem[]>>}
 */
async function getAll() {
  const data = await request.get('/user/all')
  return data
}

/**
 * 加载用户详情
 * @param {Number} id 
 * @returns {Promise<BaseResponse<UserItem>>}
 */
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