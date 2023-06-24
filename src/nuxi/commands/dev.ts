import { defineNuxtCommand } from '.'

export default defineNuxtCommand({
  meta: {
    name: 'dev',
    usage: 'npx wnuxi dev [--clear] [--port, -p]',
    description: 'Run development server',
  },
  invoke() {
    console.log('运行dev逻辑')
  },
})
