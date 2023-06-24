import type { Argv } from 'mri'
import { cyan, magenta } from 'colorette'

const _rDefault = (r: any) => r.default || r
const lazyImport = (path: string) => () => import(path).then(_rDefault)

// 命令的集合
export const commands = {
  dev: lazyImport('./dev'),
  build: lazyImport('./build'),
  usage: lazyImport('./usage'),
}

export type Command = keyof typeof commands

export interface NuxtCommandMeta {
  name: string
  usage: string
  description: string
  [key: string]: any
}

export interface NuxtCommand {
  meta: NuxtCommandMeta
  invoke(args: Argv, options?: Record<string, any>): Promise<void> | void
}

// ts处理的构建命令方法
export function defineNuxtCommand(command: NuxtCommand): NuxtCommand {
  return command
}

// 展示帮助信息
export function showHelp(meta?: Partial<NuxtCommandMeta>) {
  const sections: string[] = []
  if (meta) {
    if (meta.usage) {
      sections.push(`${magenta('> ')} Usage: ${cyan(meta.usage)}`)
    }

    if (meta.description) {
      sections.push(magenta('⋮ ') + meta.description)
    }
  }

  sections.push(`Use ${cyan('npx wnuxi [command] --help')} to see help for each command`)

  console.log(`${sections.join('\n\n')}\n`)
}
