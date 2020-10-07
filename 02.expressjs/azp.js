const server = require('.')

//native module
require('http')
//package with default module
require('package-name')
//package module
require('package_name/path/to/module')
//local module
require('../my/module')

//-> filename
//->dirname/index.js

server.listen(3000)