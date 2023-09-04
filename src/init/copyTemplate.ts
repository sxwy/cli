import path from 'node:path'
import fse from 'fs-extra'
import ora from 'ora'
import { log } from '../utils/index.js'
import { Option, Project } from './type.js'

/** 获取拷贝目录 */
const getCopyPath = (projectName: string) => {
  return path.resolve(process.cwd(), projectName)
}

const copy = async (downloadPath: string, project: Project, option: Option) => {
  const fileList = fse.readdirSync(downloadPath)
  const copyPath = getCopyPath(project.projectName)
  log.verbose('拷贝目录', copyPath)
  if (fse.pathExistsSync(copyPath) && !option.force) {
    throw new Error(`当前目录下已存在 ${project.projectName} 文件夹`)
  }
  fileList.forEach((file) => {
    if (file !== '.git') {
      fse.copySync(`${downloadPath}/${file}`, `${copyPath}/${file}`)
    }
  })
  fse.removeSync(downloadPath)
}

export default async (
  downloadPath: string,
  project: Project,
  option: Option
) => {
  const spinner = ora('正在拷贝模板...').start()
  try {
    await copy(downloadPath, project, option)
    spinner.stop()
    log.success('拷贝模板成功')
  } catch (error: any) {
    spinner.stop()
    log.verbose('拷贝模板失败', error?.message)
    throw error
  }
}
