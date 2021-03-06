// 主要讲所有模块的接口api地址暴露出去

import login from './special/login'
import home from './special/home'
import verifyCode from './special/verifyCode'
import menuManager from './systemSet/menuManager'
import userManager from './systemSet/userManager'
import company from './systemSet/companyManager'
import roleManager from './systemSet/roleManager'

// 导出接口
export default {
  login,
  home,
  verifyCode,
  menuManager,
  userManager,
  company,
  roleManager
  // ……
}
