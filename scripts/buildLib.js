const shell = require('shelljs');
const path = require('path')

shell.exec('node -v')

const buildTarget = path.resolve(process.cwd(),'./packages/vue-dist')
const copyTarget = path.resolve(process.cwd(),'./packages/webpack-dev-tool')

shell.cd(copyTarget)
shell.rm('-rf','lib')

shell.cd(buildTarget)
shell.rm('-rf','lib')
shell.exec('npm run build')

shell.cp('-R','lib',copyTarget)
