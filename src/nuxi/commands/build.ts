import { defineNuxtCommand } from '.'

export default defineNuxtCommand({
  meta: {
    name: 'build',
    usage: 'npx wnuxi build [--minify]',
    description: 'Build production deployment',
  },
  invoke() {
    console.log('运行build逻辑')
  },
})
