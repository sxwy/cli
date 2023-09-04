import chalk from 'chalk'
import semver from 'semver'
import log from '../utils/log.js'
import { LOWEST_NODE_VERSION } from '../constants/index.js'

export default () => {
  log.info('node version', process.version)
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(
      chalk.red(`cli 需要安装 ${LOWEST_NODE_VERSION} 以上版本的 Node.js`)
    )
  }
}
