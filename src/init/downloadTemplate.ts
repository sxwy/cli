import path from 'node:path'
import { homedir } from 'node:os'
import fse from 'fs-extra'
import ora from 'ora'
import { execa } from 'execa'
import { log } from '../utils/index.js'
import { Project } from './type.js'
import { TEMP_DIR } from './constants.js'

/** 获取下载的缓存目录 */
const getCachePath = () => {
  return path.resolve(homedir(), TEMP_DIR, 'template')
}

/** 获取下载的项目目录 */
const getProjectPath = (projectName: string) => {
  return path.resolve(getCachePath(), projectName)
}

const download = async (project: Project) => {
  const cachePath = getCachePath()
  log.verbose('下载目录', cachePath)
  if (!fse.pathExistsSync(cachePath)) {
    fse.mkdirpSync(cachePath)
  }

  const projectPath = getProjectPath(project.template.name)
  log.verbose('项目目录', projectPath)
  if (fse.pathExistsSync(projectPath)) {
    fse.removeSync(projectPath)
  }

  await execa('git', ['clone', `${project.template.value}`], {
    cwd: cachePath
  })

  return projectPath
}

export default async (project: Project) => {
  const spinner = ora('正在下载模板...').start()
  try {
    const projectPath = await download(project)
    spinner.stop()
    log.success('下载模板成功')
    return projectPath
  } catch (error: any) {
    spinner.stop()
    log.verbose('下载模板失败', error?.message)
    throw error
  }
}
