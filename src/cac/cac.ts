#!/usr/bin/env node

import cac from 'cac'
import { version } from '../../package.json'

const cli = cac('cac')

cli.command('dev', 'dev mode')
  .option('-p,--port', 'port')
  .action((value) => {
    console.log('im cac, dev mode, value: ', value)
  })

cli.command('build', 'build mode')
  .action(() => {
    console.log('im cac, build mode')
  })

cli.version(version)
cli.help()
cli.parse()
