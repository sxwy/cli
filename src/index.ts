import createInitCli from './init/index.js'
import { exception } from './utils/index.js'

export default () => {
  exception()
  createInitCli()
}
