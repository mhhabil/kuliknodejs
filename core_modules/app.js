//Mengambil Argumen

const yargs = require("yargs");
const { saveContact } = require("./contacts");

yargs.command({
  command : 'add',
  describe : 'Create new contact',
  builder : {
    nama : {
      describe : 'Nama Lengkap',
      demandOption : true,
      type : 'string',
    },
    nohp : {
      describe : 'Nomor Handphone',
      demandOption : true,
      type : 'string',
    },
    email : {
      describe : 'Email',
      demandOption : false,
      type : 'string',
    },
  },
  handler(argv) {
    saveContact(argv.nama, argv.nohp, argv.email);
    
  },
})
yargs.parse();


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
// fs.readFile('data/test.txt', 'utf-8',(err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });



// const question2 = () => {
//   return new Promise ((resolve, reject) => {
//     rl.question('Masukkan Nomor HP : ', (nohp) => {
//       resolve(nohp);
//     });
//   });
// };

// const question3 = () => {
//   return new Promise ((resolve, reject) => {
//     rl.question('Masukkan Email : ', (email) => {
//       resolve(email);
//     });
//   });
// };

// const {questions, saveContact} = require('./contacts');
// const main = async () => {
//   const nama = await questions('Masukkan Nama Anda : ');
//   const nohp = await questions('Masukkan Email Anda : ');
//   const email = await questions('Masukkan Nomor Hp Anda : ');

//   saveContact(nama, nohp, email);
// };

// main();

// rl.question('Siapa nama anda?',(nama) =>{
//   rl.question('Masukkan no HP : ', (nohp) => {
//     const contact = { nama, nohp };
//     const file = fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(file);

//     contacts.push(contact);

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//     console.log(`Terima kasih ${nama} sudah memasukkan kontak anda`);
//     rl.close();
//   });

// });