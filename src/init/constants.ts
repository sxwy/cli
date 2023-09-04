import { Template } from './type.js'

/** 下载模板到本地的缓存目录 */
export const TEMP_DIR = '.sxwy'

/** 前台项目类型 */
export const H5_TYPE = 'h5'

/** 后台项目类型 */
export const ADMIN_TYPE = 'admin'

/** 小程序项目类型 */
export const MINIPROGRAM_TYPE = 'miniprogram'

/** 项目类型列表 */
export const TYPE_LIST = [
  {
    name: '前台项目',
    value: H5_TYPE
  },
  {
    name: '后台项目',
    value: ADMIN_TYPE
  },
  {
    name: '小程序项目',
    value: MINIPROGRAM_TYPE
  }
]

/** 项目模板列表 */
export const TEMPLATE_LIST: Template[] = [
  {
    name: 'vue2-h5-template',
    desc: 'Vue2 + TypeScript + Vant2 项目模板',
    value: 'git@github.com:sxwy/vue2-h5-template.git',
    type: H5_TYPE
  },
  {
    name: 'vue3-h5-template',
    desc: 'Vue3 + TypeScript + Vant4 项目模板',
    value: 'git@github.com:sxwy/vue3-h5-template.git',
    type: H5_TYPE
  },
  {
    name: 'vue3-admin-template',
    desc: 'Vue3 + TypeScript + ElementPlus 项目模板',
    value: 'git@github.com:sxwy/vue3-admin-template.git',
    type: ADMIN_TYPE
  },
  {
    name: 'vue2-miniprogram-template',
    desc: 'uni-app + Vue2 + TypeScript + uView2 项目模板',
    value: 'git@github.com:sxwy/vue2-miniprogram-template.git',
    type: MINIPROGRAM_TYPE
  }
]
