import {add} from './lib.js';
import {fileURLToPath} from 'url'
import {createRequire} from 'module'
import {readFileSync} from 'fs'
// import pgk2 from '../package.json' assert {type: 'json'}

console.log(import.meta.url)

console.log(add(10, 20))


import('./lib2.js').then(({subtract}) => console.log(subtract(200, 1)))

console.log(new URL("./lib.js", import.meta.url))
console.log(fileURLToPath(new URL("./", import.meta.url)))

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')
console.log(pkg);

console.log(JSON.parse(readFileSync(new URL('../../package.json', import.meta.url))))

