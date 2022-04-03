import request from '../utils/request'

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

module.exports = {
  getAll,
  getPages
}