import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/cac/cac',
    'src/nuxi/nuxi',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
