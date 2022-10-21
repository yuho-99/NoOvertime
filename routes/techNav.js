// 分类接口

// 创建router 实例
const router = require('express').Router()
// 引入校验工具
// 引入 校验规则
const { techNavValidator } = require('../model/techNav')
// 引入 validate 
const validator = require('../middleware/validate')
// 引入控制器 功能模块
const techNav = require('../controller/techNav')
// 引入接口鉴权中间件
const auth = require('../middleware/auth')


// 接口设置
//  获取全部
router.get('/', techNav.getAll)
// 添加新的
router.post('/', [auth, validator(techNavValidator)], techNav.create)
// 编辑单个
router.put('/:cid', [auth, validator(techNavValidator)], techNav.update)
// 删除单个
router.delete('/:cid', auth, techNav.remove)

// 导出
module.exports = router