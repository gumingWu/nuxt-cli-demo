import { cyan } from 'colorette'
import { commands, defineNuxtCommand, showHelp } from '.'

export default defineNuxtCommand({
  meta: {
    name: 'help',
    usage: 'nuxt help',
    description: 'Show help',
  },
  invoke(_args) {
    const sections: string[] = []

    sections.push(`Usage: ${cyan(`npx nuxi ${Object.keys(commands).join('|')} [args]`)}`)

    console.log(`${sections.join('\n\n')}\n`)

    // Reuse the same wording as in `-h` commands
    showHelp({})
  },
})
