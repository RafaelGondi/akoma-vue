import { copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = 'dist-docs'
const indexPath = join(outDir, 'index.html')
const segmentCount = 1 // project site: username.github.io/akoma-vue/

const redirectToSpa = `<script type="text/javascript">
(function (location) {
  if (location.search[1] === '/') {
    var decoded = location.search
      .slice(1)
      .split('&')
      .map(function (part) {
        return part.replace(/~and~/g, '&')
      })
      .join('?')
    window.history.replaceState(
      null,
      null,
      location.pathname.slice(0, -1) + decoded + location.hash,
    )
  }
})(window.location)
</script>`

const redirect404 = `<script type="text/javascript">
var segmentCount = ${segmentCount}
var location = window.location
location.replace(
  location.protocol +
    '//' +
    location.hostname +
    (location.port ? ':' + location.port : '') +
    location.pathname
      .split('/')
      .slice(0, 1 + segmentCount)
      .join('/') +
    '/?/' +
    location.pathname
      .slice(1)
      .split('/')
      .slice(segmentCount)
      .join('/')
      .replace(/&/g, '~and~') +
    (location.search ? '&' + location.search.slice(1).replace(/&/g, '~and~') : '') +
    location.hash,
)
</script>`

const indexHtml = readFileSync(indexPath, 'utf8')
const withSpaBoot = indexHtml.replace('</head>', `  ${redirectToSpa}\n</head>`)

writeFileSync(indexPath, withSpaBoot)
writeFileSync(join(outDir, '404.html'), `${redirect404}\n${withSpaBoot}`)
writeFileSync(join(outDir, '.nojekyll'), '')
