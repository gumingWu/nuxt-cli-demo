import type { Argv } from 'mri'

const _rDefault = (r: any) => r.default || r
const lazyImport = (path: string) => () => import(path).then(_rDefault)

export const commands = {
  dev: lazyImport('./dev'),
  build: lazyImport('./build'),
}

export type Commands = keyof typeof commands

export interface NuxtCommandMeta {
  name: string
  usage: string
  description: string
  [key: string]: any
}

export interface NuxtCommand {
  invoke(args: Argv, options?: Record<string, any>): Promise<void> | void
  meta: NuxtCommandMeta
}

export function defineNuxtCommand(command: NuxtCommand): NuxtCommand {
  return command
}
