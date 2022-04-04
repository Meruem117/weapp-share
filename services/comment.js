const request = require('../utils/request')

/**
 * 加载全部
 * @returns {Promise<BaseResponse<CommentItem[]>>}
 */
async function getAll() {
  const data = await request.get('/comment/all')
  return data
}

/**
 * 加载分页列表
 * @param {CommentPageRequest} commentPageRequest
 * @returns {Promise<BasePageResponse<CommentItem[]>>}
 */
async function getPages(commentPageRequest) {
  const data = await request.get('/comment/list', commentPageRequest)
  return data
}

/**
 * 加载分享详情
 * @param {Number} id
 * @returns {Promise<BaseResponse<CommentItem>>}
 */
async function getCommentById(id) {
  const data = await request.get('/comment/get', {
    id
  })
  return data
}

module.exports = {
  getAll,
  getPages,
  getCommentById
}