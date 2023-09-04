import log from './log.js'
import isDebug from './isDebug.js'

const printErrorLog = (type: string, error: any) => {
  if (isDebug()) {
    log.error(type, error)
  } else {
    log.error(type, error?.message)
  }
}

export default () => {
  process.on('uncaughtException', (error) => printErrorLog('error', error))
  process.on('unhandledRejection', (error) => printErrorLog('promise', error))
}
