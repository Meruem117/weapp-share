const request = require('../utils/request')

/**
 * 加载全部
 */
async function getAll() {
  const data = await request.get('/comment/all')
  return data
}

/**
 * 加载分页列表
 * @param {import('../models').CommentPageRequest} commentPageRequest
 * @returns {BaseResponse} 分页列表
 */
async function getPages(commentPageRequest) {
  const data = await request.get('/comment/list', commentPageRequest)
  return data
}

module.exports = {
  getAll,
  getPages
}