import { copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = 'dist-docs'

copyFileSync(join(outDir, 'index.html'), join(outDir, '404.html'))
writeFileSync(join(outDir, '.nojekyll'), '')
