import { Command } from 'commander'
import fse from 'fs-extra'
import { dirname } from 'dirname-filename-esm'
import path from 'node:path'
import { log } from '../utils/index.js'

const __dirname = dirname(import.meta)
const pkgPath = path.resolve(__dirname, '../../package.json')
const pkg = fse.readJsonSync(pkgPath)

log.info('cli version', pkg.version)

const program = new Command()

program
  .name(Object.keys(pkg.bin)[0])
  .version(pkg.version)
  .usage('<command> [options]')
  .option('-d, --debug', '是否开启调试模式', false)

program.on('option:debug', () => {
  if (program.opts().debug) {
    log.verbose('debug', 'launch debug mode')
  }
})

program.on('command:*', (result) => {
  log.error('未知的命令', result[0])
})

export default program
