import make from '../inquirer/index.js'
import { log } from '../utils/index.js'
import { TYPE_LIST, TEMPLATE_LIST } from './constants.js'
import { Option, Template, Project } from './type.js'

const getTemplateType = (type: string) => {
  if (type) {
    const isFind = TYPE_LIST.find((item) => item.value === type)
    if (isFind) {
      return Promise.resolve(type)
    } else {
      throw new Error(`未找到对应的 ${type} 项目类型`)
    }
  } else {
    return make({
      type: 'list',
      choices: TYPE_LIST,
      message: '请选择项目类型'
    })
  }
}

const getTemplateUrl = (url: string, type: string) => {
  const templateList = TEMPLATE_LIST.filter((item) => item.type === type)
  if (url) {
    const isFind = templateList.find((item) => item.value === url)
    if (isFind) {
      return Promise.resolve(url)
    } else {
      throw new Error(`未找到对应的 ${url} 项目模板`)
    }
  } else {
    const choices = templateList.map((item) => ({
      name: item.desc,
      value: item.value
    }))
    return make({
      choices,
      type: 'list',
      message: '请选择项目模板'
    })
  }
}

const getTemplateName = (name: string | undefined) => {
  if (name) {
    return Promise.resolve(name)
  } else {
    return make({
      type: 'input',
      message: '请输入项目名称',
      validate(v) {
        if (v.length > 0) {
          return true
        }
        return '项目名称必须输入'
      }
    })
  }
}

export default async (
  name: string | undefined,
  option: Option
): Promise<Project> => {
  const { type, url } = option
  const templateType = await getTemplateType(type)
  log.verbose('选择的模板类型', templateType)
  const templateUrl = await getTemplateUrl(url, templateType)
  log.verbose('选择的模板地址', templateUrl)
  const projectName = await getTemplateName(name)
  log.verbose('输入的项目名称', projectName)
  const templateInfo = TEMPLATE_LIST.find(
    (item) => item.value === templateUrl
  ) as Template
  log.verbose('选择的模板信息', JSON.stringify(templateInfo))
  return {
    projectName,
    template: templateInfo
  }
}
