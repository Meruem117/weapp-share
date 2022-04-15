const request = require('../utils/request')

/**
 * 加载全部
 * @returns {Promise<BaseResponse<RecordItem[]>>}
 */
async function getAll() {
  const data = await request.get('/record/all')
  return data
}

/**
 * 加载分页列表
 * @param {RecordPageRequest} recordPageRequest
 * @returns {Promise<BasePageResponse<RecordItem[]>>}
 */
async function getPages(recordPageRequest) {
  const data = await request.get('/record/list', recordPageRequest)
  return data
}

/**
 * 加载记录详情
 * @param {Number} id
 * @returns {Promise<BaseResponse<RecordItem>>}
 */
async function getRecordById(id) {
  const data = await request.get('/record/get', {
    id
  })
  return data
}

/**
 * 新增记录
 * @param {RecordItem} record
 * @returns {Promise<BaseResponse<Number>>}
 */
async function addRecord(record) {
  const data = await request.post('/record/add', comment)
  return data
}

module.exports = {
  getAll,
  getPages,
  getRecordById,
  addRecord
}