#!/usr/bin/env node
import mri from 'mri'
import clear from 'clear'
import { bold, gray, redBright } from 'colorette'
import { satisfies } from 'semver'
import { type Command, type NuxtCommand, commands, showHelp } from './commands'

async function main() {
  // 读取参数
  const args = mri(process.argv.slice(2))
  console.log(args)

  // 获取命令，如果没有传入，则默认展示使用方法
  const command = args._.shift() || 'usage'

  function showBanner(_clear?: boolean) {
    if (_clear)
      clear()

    console.log(gray(`WNuxi ${bold('1.0.0')}`))
  }

  // 展示版本
  showBanner(command === 'dev' && args.clear)

  function checkEngines() {
    const currentNode = process.versions.node
    const nodeRange = '^14.18.0 || >=16.10.0' // 这里是控制node范围
    if (!satisfies(currentNode, nodeRange))
      console.warn(redBright(`Current version of Node.js (\`${currentNode}\`) is unsupported and might cause issues.\n       Please upgrade to a compatible version (${nodeRange}).`))
  }

  // 控制node版本
  checkEngines()

  // 获取命令实例
  const cmd = await commands[command as Command]() as NuxtCommand
  if (args.h || args.help) {
    showHelp(cmd.meta)
  } else {
    await cmd.invoke(args) // 执行命令方法
  }
}

main()
