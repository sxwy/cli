/** init cli option */
export interface Option {
  /** 是否强制覆盖目录 */
  force: boolean
  /** 项目地址（git） */
  url: string
  /** 项目类型 */
  type: string
}

/** 模板信息 */
export interface Template {
  /** 模板名称 */
  name: string
  /** 模板描述 */
  desc: string
  /** 模板地址（git） */
  value: string
  /** 模板类型 */
  type: string
}

/** 项目信息 */
export interface Project {
  /** 用户输入的项目名称 */
  projectName: string
  /** 模板信息 */
  template: Template
}
