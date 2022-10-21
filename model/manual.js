// 分类数据模块

// y引入 mongoose
const mongoose = require('mongoose')
// 引入joi
const Joi = require('joi')

// 定义分类数据结构
const manualSchema = new mongoose.Schema({
  // 标题
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  // content 内容设置
  content: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 200
  },
  // 跳转链接
  linksSrc: {
    type: String,
    required: true
  },
  // 图片地址 设置
  iconUrl: {
    type: String,
    required: true
  }
})

// 创建category model 
const Manual = mongoose.model('Manual', manualSchema)

// 校验函数
function manualValidator (data) {
  // 设置数据校验
  const schema = Joi.object({
    title: Joi.string().min(2).max(50).required(),
    content: Joi.string().min(2).max(200).required(),
    linksSrc: Joi.string().min(2).required(),
    iconUrl: Joi.string().min(2).required()
  })
  return schema.validate(data)
}

// 导出
module.exports = {
  // 导出model
  Manual,
  // 导出校验函数
  manualValidator
}