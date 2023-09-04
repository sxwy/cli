import program from '../command/index.js'
import { checkNodeVersion, log } from '../utils/index.js'
import getTemplate from './getTemplate.js'
import downloadTemplate from './downloadTemplate.js'
import copyTemplate from './copyTemplate.js'
import { Option } from './type.js'

export default () => {
  program
    .command('init [name]')
    .description('init project')
    .option('-f, --force', '是否强制更新', false)
    .option('-t, --type <type>', '项目类型（web/miniprogram）')
    .option('-u, --url <url>', '项目地址（git）')
    .hook('preAction', () => {
      checkNodeVersion()
    })
    .action(async (name: string | undefined, option: Option) => {
      log.verbose('init', name as string, option)
      // 1、选择项目模板，生成项目信息
      const project = await getTemplate(name, option)
      log.verbose('project', JSON.stringify(project))
      // 2、下载项目模板至缓存目录
      const downloadPath = await downloadTemplate(project)
      // 3、拷贝项目模板至创建目录
      await copyTemplate(downloadPath, project, option)
    })

  program.parse()
}
