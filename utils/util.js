function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getData(url) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

// Plus 页面
var data_plus = require('../data/data_plus.js')

function getPlus() {
  return data_plus.plus
}

//detail 评论
var data_comment = require('../data/data_comment.js')

function getComment() {
  return data_comment.comment
}

//publish 发布
var data_publish = require('../data/data_publish.js')

function getPublish() {
  return data_publish.publish
}

//user 用户
var data_user = require('../data/data_user.js')

function getUser() {
  return data_user.user
}

//mydetail 我的评论
var data_mydetail = require('../data/data_mydetail.js')

function getMyDetail() {
  return data_mydetail.mydetail
}

//record 记录
var data_record = require('../data/data_record.js')

function getRecord() {
  return data_record.record
}

//message 私信
var data_message = require('../data/data_message.js')

function getMessage() {
  return data_message.message
}

module.exports = {
  formatTime,
  getData,
  getPlus,
  getComment,
  getPublish,
  getUser,
  getMyDetail,
  getRecord,
  getMessage
}