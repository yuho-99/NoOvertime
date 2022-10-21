// 分类接口

// 创建router 实例
const router = require('express').Router()
// 引入校验工具
// 引入 校验规则
const { manualValidator } = require('../model/manual')
// 引入 validate 
const validator = require('../middleware/validate')
// 引入控制器 功能模块
const manual = require('../controller/manual')
// 引入接口鉴权中间件
const auth = require('../middleware/auth')


// 接口设置
//  获取全部
router.get('/', manual.getAll)
// 添加新的
router.post('/', [auth, validator(manualValidator)], manual.create)
// 编辑单个
router.put('/:cid', [auth, validator(manualValidator)], manual.update)
// 删除单个
router.delete('/:cid', auth, manual.remove)

// 导出
module.exports = router