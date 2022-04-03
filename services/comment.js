const request = require('../utils/request')
const {
  commentPageRequestType
} = require('../models/comment.d')

/**
 * 加载全部
 */
async function getAll() {
  const data = await request.get('/comment/all')
  return data
}

/**
 * 加载分页列表
 * @param {commentPageRequestType} 分页查询条件
 * @returns {} 分页列表
 */
async function getPages(commentPageRequest) {
  const data = await request.get('/comment/list', commentPageRequest)
  return data
}

module.exports = {
  getAll,
  getPages
}