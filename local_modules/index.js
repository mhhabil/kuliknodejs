// const cetakNama = (nama) => `Hi, nama saya ${nama}`; //ini Arrow Function
// const fs = require('fs');//Import CORE MODULE
// const cetakNama = require('./coba'); //import local module
// const moment = require('moment'); //Import 3rd party module / NPM modules / Foldernya node_modules

const coba = require('./coba');


console.log(coba.cetakNama('Muhammad Habil'), coba.PI, coba.mahasiswa.cetakmhs(), new coba.orang());