//Core Modules
//File System
const fs = require('fs');

//menuliskan string ke dalam file dir (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Halo nama saya habil');
    
// } catch (error) {
//     console.log(error);
// }

//menuliskan string ke dalam file dir (async)
// fs.writeFile('data/test.txt', 'Halo nama saya Muhammad Habil',(e) => {
//     console.log(e);
// });

//Membaca file ke string versi 1 sync
// const data = fs.readFileSync('data/test.txt');

// console.log(data.toString());

//Membaca file ke string versi 2 sync
// const data = fs.readFileSync('data/test.txt', 'utf-8');

// console.log(data);

//Membaca file ke string dengan async
fs.readFile('data/test.txt', 'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });